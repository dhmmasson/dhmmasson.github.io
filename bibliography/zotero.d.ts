/**
 * Format of the JSON file exported by BetterBibTeX.
 * and from https://github.com/retorquere/zotero-better-bibtex/blob/master/schema/BetterBibTeX%20JSON.json
 */

export interface BBTJSONFormat {
  collections?: {
    [k: string]: Collection;
  };
  version: Version;
  config: ClientConfigurationAtTimeOfExport;
  items: Item[];
}

export interface Version {
  zotero: string;
  bbt: string;
}

export interface ClientConfigurationAtTimeOfExport {
  id: string;
  label?: string;
  localeDateOrder?: string;
  options?: Option;
  preferences?: Preference;
}

export interface Collection {
  collections: string[];
  items: number[];
  key: string;
  name: string;
  parent?: string;
}

export interface Attachment {
  accessDate?: string;
  contentType?: string;
  itemType?: "attachment";
  key?: string;
  linkMode?: string;
  path?: string;
  tags?: Tag[];
  title: string;
  uri?: string;
  url?: string;
}

interface Creator {
  creatorType?: CreatorType;
  firstName?: string;
  lastName?: string;
  multi?: {
    [k: string]: unknown;
  };
  name?: string;
}

interface Tag {
  tag: string;
  type?: number;
}

export interface Item {
  DOI?: string;
  ISBN?: string;
  ISSN?: string;
  abstractNote?: string;
  accessDate?: string;
  adminFlag?: string;
  adoptionDate?: string;
  applicationNumber?: string;
  archive?: string;
  archiveCollection?: string;
  archiveLocation?: string;
  artworkSize?: string;
  assemblyNumber?: string;
  assignee?: string;
  attachments?: Attachment[];
  authority?: string;
  callNumber?: string;
  citationKey?: string;
  code?: string;
  codeNumber?: string;
  collections?: string[];
  committee?: string;
  conferenceDate?: string;
  conferenceName?: string;
  country?: string;
  court?: string;
  creators?: Creator[];
  date?: string;
  dateAdded?: string;
  dateAmended?: string;
  dateModified?: string;
  division?: string;
  documentName?: string;
  documentNumber?: string;
  edition?: string;
  extra?: string[];
  filingDate?: string;
  gazetteFlag?: string;
  genre?: string;
  history?: string;
  institution?: string;
  issue?: string;
  issuingAuthority?: string;
  itemID?: number;
  itemType?: ItemType;
  journalAbbreviation?: string;
  jurisdiction?: string;
  key?: string;
  language?: string;
  legalStatus?: string;
  legislativeBody?: string;
  libraryCatalog?: string;
  medium?: string;
  meetingName?: string;
  meetingNumber?: string;
  multi?: {
    [k: string]: unknown;
  };
  newsCaseDate?: string;
  note?: string;
  notes?: string[];
  numPages?: string;
  number?: string;
  numberOfVolumes?: string;
  openingDate?: string;
  opus?: string;
  originalDate?: string;
  pages?: string;
  parentTreaty?: string;
  place?: string;
  priorityDate?: string;
  priorityNumbers?: string;
  proceedingsTitle?: string;
  programmingLanguage?: string;
  publicationDate?: string;
  publicationNumber?: string;
  publicationTitle?: string;
  publisher?: string;
  references?: string;
  regnalYear?: string;
  reign?: string;
  relations?: string[];
  reporter?: string;
  resolutionLabel?: string;
  rights?: string;
  runningTime?: string;
  scale?: string;
  section?: string;
  series?: string;
  seriesNumber?: string;
  seriesText?: string;
  seriesTitle?: string;
  session?: string;
  shortTitle?: string;
  signingDate?: string;
  status?: string;
  supplementName?: string;
  system?: string;
  tags?: Tag[];
  title?: string;
  type?: string;
  university?: string;
  uri?: string;
  url?: string;
  versionNumber?: string;
  volume?: string;
  volumeTitle?: string;
  yearAsVolume?: string;
}

interface Option {
  Authors?: boolean;
  Items?: boolean;
  Normalize?: boolean;
  Preferences?: boolean;
  Title?: boolean;
  Year?: boolean;
  biblatexAPA?: boolean;
  biblatexChicago?: boolean;
  exportFileData?: boolean;
  exportNotes?: boolean;
  keepUpdated?: boolean;
  markdown?: boolean;
  quickCopyMode?: string;
  useJournalAbbreviation?: boolean;
  worker?: boolean;
}

export interface Preference {
  DOIandURL?: DoiOrURL;
  ascii?: string;
  asciiBibLaTeX?: boolean;
  asciiBibTeX?: boolean;
  autoAbbrev?: boolean;
  autoAbbrevStyle?: string;
  autoExport?: AutoExportMode;
  autoExportDelay?: number;
  autoExportIdleWait?: number;
  autoExportPathReplaceDiacritics?: boolean;
  autoExportPathReplaceDirSep?: string;
  autoExportPathReplaceSpace?: string;
  autoPinDelay?: number;
  automaticTags?: boolean;
  auxImport?: boolean;
  baseAttachmentPath?: string;
  biblatexExtendedDateFormat?: boolean;
  biblatexExtendedNameFormat?: boolean;
  biblatexExtractEprint?: boolean;
  bibtexEditionOrdinal?: boolean;
  bibtexParticleNoOp?: boolean;
  bibtexURL?: BibtexURLMode;
  cache?: boolean;
  charmap?: string;
  citeCommand?: string;
  citekeyCaseInsensitive?: boolean;
  citekeyFold?: boolean;
  citekeyFormat?: string;
  citekeySearch?: boolean;
  citekeyUnsafeChars?: string;
  csquotes?: string;
  exportBibTeXStrings?: "off" | "detect" | "match" | "match+reverse";
  exportBraceProtection?: boolean;
  exportTitleCase?: boolean;
  extraMergeCSL?: boolean;
  extraMergeCitekeys?: boolean;
  extraMergeTeX?: boolean;
  git?: string;
  import?: boolean;
  importBibTeXStrings?: boolean;
  importCaseProtection?: "as-needed" | "on" | "off";
  importCitationKey?: boolean;
  importDetectURLs?: boolean;
  importExtra?: boolean;
  importJabRefAbbreviations?: boolean;
  importJabRefStrings?: boolean;
  importNoteToExtra?: string;
  importSentenceCase?: "on+guess" | "on" | "off";
  importSentenceCaseQuoted?: boolean;
  importUnknownTexCommand?: string;
  itemObserverDelay?: number;
  jabrefFormat?: number;
  jieba?: boolean;
  keyConflictPolicy?: "change" | "keep";
  keyScope?: "global" | "library";
  kuroshiro?: boolean;
  language?: "langid" | "language" | "both";
  logEvents?: boolean;
  mapMath?: string;
  mapText?: string;
  packages?: string;
  parseParticles?: boolean;
  patchDates?: string;
  postscript?: string;
  postscriptOverride?: string;
  preferencesOverride?: string;
  qualityReport?: boolean;
  quickCopyEta?: string;
  quickCopyMode?:
    | "latex"
    | "citekeys"
    | "eta"
    | "gitbook"
    | "orgRef"
    | "orgRef3"
    | "orgmode"
    | "pandoc"
    | "roamCiteKey"
    | "rtfScan"
    | "selectlink"
    | "jupyter"
    | "jekyll";
  quickCopyOrgMode?: "zotero" | "citationkey";
  quickCopyPandocBrackets?: boolean;
  quickCopySelectLink?: "zotero" | "citationkey";
  rawImports?: boolean;
  rawLaTag?: string;
  relativeFilePaths?: boolean;
  retainCache?: boolean;
  scrubDatabase?: boolean;
  separatorList?: string;
  separatorNames?: string;
  skipFields?: string;
  skipWords?: string;
  startupProgress?: string;
  strings?: string;
  stringsOverride?: string;
  verbatimFields?: string;
  warnBulkModify?: number;
  warnTitleCased?: boolean;
}

export type DoiOrURL = "both" | "doi" | "url";

export type AutoExportMode = "immediate" | "idle" | "off";

export type BibtexURLMode = "off" | "note" | "note-url-ish" | "url" | "url-ish";
export type CreatorType =
  | "artist"
  | "attorneyAgent"
  | "author"
  | "bookAuthor"
  | "cartographer"
  | "castMember"
  | "commenter"
  | "composer"
  | "contributor"
  | "cosponsor"
  | "counsel"
  | "director"
  | "editor"
  | "guest"
  | "interviewee"
  | "interviewer"
  | "inventor"
  | "performer"
  | "podcaster"
  | "presenter"
  | "producer"
  | "programmer"
  | "recipient"
  | "reviewedAuthor"
  | "scriptwriter"
  | "seriesEditor"
  | "sponsor"
  | "testimonyBy"
  | "translator"
  | "wordsBy";

type ItemType =
  | "annotation"
  | "artwork"
  | "attachment"
  | "audioRecording"
  | "bill"
  | "blogPost"
  | "book"
  | "bookSection"
  | "case"
  | "classic"
  | "computerProgram"
  | "conferencePaper"
  | "dataset"
  | "dictionaryEntry"
  | "document"
  | "email"
  | "encyclopediaArticle"
  | "film"
  | "forumPost"
  | "gazette"
  | "hearing"
  | "instantMessage"
  | "interview"
  | "journalArticle"
  | "legalCommentary"
  | "letter"
  | "magazineArticle"
  | "manuscript"
  | "map"
  | "newspaperArticle"
  | "note"
  | "patent"
  | "podcast"
  | "preprint"
  | "presentation"
  | "radioBroadcast"
  | "regulation"
  | "report"
  | "standard"
  | "statute"
  | "thesis"
  | "treaty"
  | "tvBroadcast"
  | "videoRecording"
  | "webpage";
