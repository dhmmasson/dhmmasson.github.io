// deno_db.ts

export interface Person {
  firstName: string;
  lastName: string;
  orcid?: string;
  idhal?: string;
  email?: string;
}

export interface Database {
  persons: Record<string, Person>;
  candidates: Record<string, string | null>;
  keys: Record<string, string[]>;
}

type Candidate =
  | {
      firstName?: string;
      lastName?: string;
    }
  | string;

function removeDiatrics(str: string): string {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export class PersonDatabase {
  private db: Database;
  private dbPath: string;

  constructor(dbPath: string) {
    this.dbPath = dbPath;
    this.db = { persons: {}, candidates: {}, keys: {} };
  }

  async loadDatabase(): Promise<void> {
    try {
      const data = await Deno.readTextFile(this.dbPath);
      const { persons, candidates, keys } = JSON.parse(data);
      if (persons) this.db.persons = persons;
      if (keys) this.db.keys = keys;
      // Get the candidate from the keys objects
      for (const key in this.db.keys) {
        for (const candidate of this.db.keys[key]) {
          this.db.candidates[candidate] = key;
        }
      }
    } catch (error) {
      console.log("Error loading database", error);
    }
  }

  async saveDatabase(): Promise<void> {
    // recreate the keys object with the keys sorted
    const keys: Record<string, string[]> = {};
    for (const key of Object.keys(this.db.keys).sort()) {
      keys[key] = this.db.keys[key].sort();
    }

    const data = JSON.stringify(
      { keys: this.db.keys, persons: this.db.persons },
      null,
      2
    );
    await Deno.writeTextFile(this.dbPath, data);
  }
  getPerson(candidate: Candidate) {
    let key: string | null = null;
    if (typeof candidate === "string") {
      key = this.matchCandidate(candidate);
    } else {
      key = this.matchCandidate(
        `${candidate.firstName ?? ""} ${candidate.lastName ?? ""}`
      );
      //   this.addPerson({
      //     firstName: candidate.firstName ?? "",
      //     lastName: candidate.lastName ?? "",
      //   });
    }
    if (key) {
      return this.db.persons[key];
    }
    return null;
  }

  addPerson(person: Person): void {
    const key = generatePersonKey(person.firstName, person.lastName);
    if (!this.db.persons[key]) {
      this.db.persons[key] = person;
    }
  }

  matchCandidate(candidateName: string): string | null {
    if (candidateName in this.db.candidates) {
      return this.db.candidates[candidateName];
    }

    const nameParts = candidateName.split(" ");
    const firstName = nameParts[0];
    const lastName = nameParts[nameParts.length - 1];
    const personKey = generatePersonKey(firstName, lastName);

    // if the key does not exist, we add the candidate to the database
    // we add the candidateName to the keys array
    // we add the candidateName to the candidates object
    // and we return the personKey
    if (!this.db.keys[personKey]) {
      this.db.candidates[candidateName] = personKey;
      this.db.keys[personKey] = [candidateName];
      return personKey;
    } else {
      this.db.candidates[candidateName] = personKey;
      //   if (!this.db.keys[personKey].includes(candidateName))
      this.db.keys[personKey].push(candidateName);
      return personKey;
    }
  }
}

export function generatePersonKey(firstName: string, lastName: string): string {
  return removeDiatrics(
    `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}${lastName[
      lastName.length - 1
    ].toUpperCase()}`
  );
}
