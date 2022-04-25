import { CrosswordTask } from './CrosswordTask'

export const tasks: CrosswordTask[] = [
  {
    word: 'aggregation',
    hint: 'Besondere 1:n beziehung im EERM',
    topic: 'db1',
  },
  {
    word: 'varray',
    hint: 'In Oracle nennt man so ein Array variabler Groesse',
    topic: 'db2',
  },
  {
    word: 'normalisierung',
    hint: 'Prozess des Aufteilens der Daten eines relationalen Schemas zur Redundanzvermeidung',
    topic: 'db1',
  },
  {
    word: 'keine',
    hint: 'Die Exception ORA-01403 bedeutet, ein SELECT bekam ... Daten zurueck',
    topic: 'db2',
  },
  {
    word: 'isolationsgrad',
    hint: 'Read Commited ist ein ...',
    topic: 'db1',
  },
  {
    word: 'ddl',
    hint: 'Data Definition Language (Abkuerzung)',
    topic: 'db1',
  },
  {
    word: 'erd',
    hint: 'Entity Relationship Diagram (Abkuerzung)',
    topic: 'db1',
  },
  {
    word: 'n+1',
    hint: 'Innerer Knoten mit n Eintraegen eines B-Baums vom Typ k hat so viele Nachfolger',
    topic: 'db2',
  },
  {
    word: 'index',
    hint: 'Wie nennt man ein Verzeichnis der Gestalt: (Wert, physikalische Adresse)?',
    topic: 'db2',
  },
  {
    word: 'administration',
    hint: 'Wofuer steht das A in DAL?',
    topic: 'db1',
  },
  {
    word: 'manipulation',
    hint: 'Wofuer steht das M in DML?',
    topic: 'db1',
  },
  {
    word: 'definition',
    hint: 'Wofuer steht das D in DDL?',
    topic: 'db1',
  },
  {
    word: 'bayer',
    hint: 'Nach wem sind B-Baeume benannt? (Nachname)',
    topic: 'db2',
  },
  {
    word: 'verlustfrei',
    hint: 'Wie heißt ein Natural Join, bei dem alle Tupel am Verbund der beiden Relationen teilnehmen?',
    topic: 'db1',
  },
  {
    word: 'fremdschluessel',
    hint: 'Wie heißt eine Attributkombination, die Primaerschluessel einer anderen Relation ist?',
    topic: 'db1',
  },
  {
    word: 'empty_blob()',
    hint: 'Mit welcher PL/SQL-Prozedur initialisiert man einen BLOB-Wert?',
    topic: 'db2',
  },
  {
    word: 'isopen',
    hint: 'Mit welchem Cursor-Attribut fragt man ab, ob ein Cursor geoeffnet ist? %...',
    topic: 'db2',
  },
  {
    word: 'notfound',
    hint: 'Mit welchem Cursor-Attribut fragt man ab, ob die letzte FETCH-Anweisung keine Zeile mehr liefert? %...',
    topic: 'db2',
  },
  {
    word: 'rowcount',
    hint: 'Mit welchem Cursor-Attribut fragt man die Gesamtanzahl der bisher gelesenen Zeilen ab? %...',
    topic: 'db2',
  },
  {
    word: 'serialisierbar',
    hint: 'Wie heißt ein Ausfuehrungsplan, der zu einem seriellen Ausfuehrungsplan aequivalent ist?',
    topic: 'db2',
  },
  {
    word: 'update',
    hint: 'SQL Befehl zum Veraendern von Daten in Tabellen',
    topic: 'db1',
  },
  {
    word: 'sqlj',
    hint: 'Welche Endung besitzen SQLJ-Quelltexte? .xxxx',
    topic: 'db2',
  },
  {
    word: 'values',
    hint: 'Mit welchem Schluesselwort werden in SQLJ gespeicherte Funktionen (aus der Datenbank) aufgerufen?',
    topic: 'db2',
  },
  {
    word: 'iterator',
    hint: 'Welches Konstrukt ist unter SQLJ mit dem ResultSet aus JDBC bzw. dem CURSOR in PL/SQL vergleichbar?',
    topic: 'db2',
  },
  {
    word: 'exists',
    hint: 'Womit wird in einer SQL-Abfrage der Existenzquantor umgesetzt?',
    topic: 'db1',
  },
  {
    word: 'jdbc',
    hint: 'Java Database Connectivity (abk.)',
    topic: 'db2',
  },
  {
    word: 'atomicity',
    hint: 'Wofuer steht das A in ACID?',
    topic: 'db2',
  },
  {
    word: 'consistency',
    hint: 'Wofuer steht das C in ACID?',
    topic: 'db2',
  },
  {
    word: 'isolation',
    hint: 'Wofuer steht das I in ACID?',
    topic: 'db2',
  },
  {
    word: 'durability',
    hint: 'Wofuer steht das D in ACID?',
    topic: 'db2',
  },
  {
    word: 'avg',
    hint: 'Mit welcher SQL-Gruppenfunktion berechnet man den Mittelwert einer Spalte?',
    topic: 'db1',
  },
  {
    word: 'insert',
    hint: 'SQL-Befehl zum Einfuegen von Daten in Tabellen',
    topic: 'db1',
  },
  {
    word: 'grant',
    hint: 'Mit welchem SQL-Befehl vergibt man Rechte auf einer Tabelle?',
    topic: 'db1',
  },
  {
    word: 'revoke',
    hint: 'Mit welchem SQL-Befehl loescht man Rechte auf einer Tabelle?',
    topic: 'db1',
  },
  {
    word: 'sqlexception',
    hint: 'Mit welcher Ausnahme wird in JDBC ein SQL-Fehler geworfen?',
    topic: 'db2',
  },
  {
    word: 'cursor',
    hint: 'Welches Konstrukt in PL/SQL bietet eine aehnliche Funktion wie das ResultSet in JDBC?',
    topic: 'db2',
  },
  {
    word: 'commit',
    hint: 'Mit welchem SQL-Befehl werden temporaere aenderungen endgueltig in die Datenbank geschrieben?',
    topic: 'db1',
  },
  {
    word: 'distinct',
    hint: 'Mit welchem Schluesselwort werden in SQL doppelte Datensaetze unterdrueckt?',
    topic: 'db1',
  },
  {
    word: 'is null',
    hint: 'Mit welchem WHERE-Ausdruck prueft man, ob eine Spalte NULL-Werte hat?',
    topic: 'db1',
  },
  {
    word: 'objektrelationales',
    hint: 'Wofuer steht das OR in ORDBMS?',
    topic: 'db2',
  },
  {
    word: 'konzeptionelle',
    hint: 'logische Gesamtsicht auf die Daten im ANSI-3-Ebenen-Modell (die ... Ebene)',
    topic: 'db1',
  },
  {
    word: 'externe',
    hint: 'Benutzersicht auf die Daten im ANSI-3-Ebenen-Modell (die ... Ebene)',
    topic: 'db1',
  },
  {
    word: 'interne',
    hint: 'physische Sicht auf die Daten im ANSI-3-Ebenen-Modell (die ... Ebene)',
    topic: 'db1',
  },
  {
    word: 'datenbank',
    hint: 'DB ist die Abkuerzung fuer dieses Wort',
    topic: 'db1',
  },
  {
    word: 'datenbasis',
    hint: 'Begriff fuer die eigentlichen, persistent gespeicherten Anwendungsdaten des DBS',
    topic: 'db1',
  },
  {
    word: 'chen',
    hint: 'Entwickler des ER-Modells (Nachname)',
    topic: 'db1',
  },
  {
    word: 'inkonsistenz',
    hint: 'Zwei Datensaetze sind zueinander im Widerspruch',
    topic: 'db1',
  },
  {
    word: 'aktives',
    hint: 'Ein DBS mit Triggern nennt man ein ... DBS',
    topic: 'db2',
  },
  {
    word: 'passives',
    hint: 'Ein DBS ohne Trigger nennt man ein ... DBS',
    topic: 'db2',
  },
  {
    word: 'inserting',
    hint: 'PL/SQL-Funktion, welche zurueckgibt ob ein Trigger durch eine Einfuegung von Daten ausgeloest wurde',
    topic: 'db2',
  },
  {
    word: 'updating',
    hint: 'PL/SQL-Funktion, welche zurueckgibt ob ein Trigger durch eine Veraenderung von Daten ausgeloest wurde',
    topic: 'db2',
  },
  {
    word: 'deleting',
    hint: 'PL/SQL-Funktion, welche zurueckgibt ob ein Trigger durch eine Loeschung von Daten ausgeloest wurde',
    topic: 'db2',
  },
  {
    word: 'statement',
    hint: 'Wenn ein Trigger nicht for each row ausgefuehrt wird, wird er für das ... ausgefuehrt werden',
    topic: 'db2',
  },
  {
    word: 'event',
    hint: 'Wofuer steht das E in ECMA?',
    topic: 'db2',
  },
  {
    word: 'condition',
    hint: 'Wofuer steht das C in ECMA?',
    topic: 'db2',
  },
  {
    word: 'mode',
    hint: 'Wofuer steht das M in ECMA?',
    topic: 'db2',
  },
  {
    word: 'action',
    hint: 'Wofuer steht das A in ECMA?',
    topic: 'db2',
  },
  {
    word: 'transitionstabelle',
    hint: 'NEW ist eine ...',
    topic: 'db2',
  },
  {
    word: 'mutating',
    hint: 'Die Reihenfolgeunabhaengigkeit kann im relationalen Modell zum ...-Table-Problem fuehren',
    topic: 'db2',
  },
  {
    word: 'laufzeitfehler',
    hint: 'RAISE_APPLICATION_ERROR erzeugt einen ...',
    topic: 'db2',
  },
  {
    word: 'spalte',
    hint: 'In SQL werden Attribute einer Entitaet so bezeichnet',
    topic: 'db1',
  },
  {
    word: 'kardinalitaet',
    hint: '1:1 und N:M stellen die ... einer Beziehung dar',
    topic: 'db1',
  },
  {
    word: 'identifizierend',
    hint: 'Eine Beziehung die im ERM mit einer durchgezogenen Linie dargestellt wird ist',
    topic: 'db1',
  },
  {
    word: 'identifizierend',
    hint: 'Wenn der Primaerschluessel der Master-Entity-Menge in der Detail-Entity-Menge ebenfalls PKs sind, ist die Beziehung',
    topic: 'db1',
  },
  {
    word: 'vollstaendig',
    hint: 'Es kann keine Entitaeten des Supertyps geben, die Spezialisierung ist ...',
    topic: 'db2',
  },
  {
    word: 'disjunkt',
    hint: 'Keine Entitaet gehoert zu mehreren Subtypen',
    topic: 'db2',
  },
  {
    word: 'generalisierung',
    hint: 'Prozess aus aehnlichen Subtypen einen Supertyp zu gewinnen',
    topic: 'db2',
  },
  {
    word: 'spezialisierung',
    hint: 'Prozess aus einem Supertypen Subtypen zu gewinnen',
    topic: 'db2',
  },
  {
    word: 'kuenstliche',
    hint: 'Um komplexe Primaerschluessel zu verhindern, kann man ... Primaerschluessel nutzen',
    topic: 'db1',
  },
  {
    word: 'multiset',
    hint: 'Ein Set in dem Duplikate erlaubt sind',
    topic: 'db2',
  },
  {
    word: 'horizontal',
    hint: 'Fragmentierung einer Hierarchie aus Super- und Subtypen die in mehreren Tabellen resultiert',
    topic: 'db2',
  },
  {
    word: 'vertikal',
    hint: 'Fragmentierung einer Hierarchie aus Super- und Subtypen die in einer Tabelle resultiert',
    topic: 'db2',
  },
  {
    word: 'nosql',
    hint: 'Key/Value-DBS sind ein Beispiel fuer ...-DBS',
    topic: 'db2',
  },
  {
    word: 'graphen',
    hint: 'Im Gegensatz zu einer relationalen-DB konzentriert sich eine ..-DB auf vernetzte Informationen',
    topic: 'db2',
  },
  {
    word: 'atomar',
    hint: 'Die Werte in Spalten einer Tabelle in der 1.NF sind',
    topic: 'db1',
  },
  {
    word: 'transitiv',
    hint: 'Diese Abhaengigkeit wird in der 3NF verhindert',
    topic: 'db1',
  },
  {
    word: 'blob',
    hint: 'Unstrukturierte Binaerdaten in Oracle',
    topic: 'db2',
  },
  {
    word: 'fetch',
    hint: 'Befehl zum Lesen eines Cursors',
    topic: 'db2',
  },
  {
    word: 'open',
    hint: 'Befehl zum Oeffnen eines Cursors',
    topic: 'db2',
  },
  {
    word: 'close',
    hint: 'Befehl zum Schliessen eines Cursors',
    topic: 'db2',
  },
  {
    word: 'dbms_output',
    hint: 'PL/SQL Package zur Ausgabe von Nachrichten',
    topic: 'db2',
  },
  {
    word: 'anonymen',
    hint: 'EXECUTE simuliert in PL/SQL einen ... Block',
    topic: 'db2',
  },
  {
    word: 'funktion',
    hint: 'Hat in Oracle einen Rueckgabewert',
    topic: 'db2',
  },
  {
    word: 'prozedur',
    hint: 'Hat in Oracle keinen Rueckgabewert',
    topic: 'db2',
  },
  {
    word: 'unknown',
    hint: 'Neben true und false gibt es in SQL',
    topic: 'db1',
  },
  {
    word: 'null',
    hint: 'Fuehrt zur Notwendigkeit der dreiwertigen Logik in SQL',
    topic: 'db1',
  },
  {
    word: 'to_date',
    hint: 'PL/SQL-Funktion, zur Konvertierung in das DATE-Format',
    topic: 'db2',
  },
  {
    word: 'kartesisches',
    hint: 'Anderer Name fuer das Kreuzprodukt',
    topic: 'db1',
  },
  {
    word: 'natural',
    hint: 'Equi-Join ohne Duplikate ist ein ...-Join',
    topic: 'db1',
  },
  {
    word: 'equi',
    hint: 'Natural-Join mit Duplikaten ist ein ...-Join',
    topic: 'db1',
  },
  {
    word: 'constraint',
    hint: 'Schluesselwort zum Erzwingen von Integritaetsbedingungen',
    topic: 'db1',
  },
  {
    word: 'unique',
    hint: 'Constraint: Spaltenwerte sind eindeutig',
    topic: 'db1',
  },
  {
    word: 'references',
    hint: 'Constraint zur Identifizierung der Master-Tabelle eines FK',
    topic: 'db1',
  },
  {
    word: 'commit',
    hint: 'Hiermit werden DML-Aenderungen dauerhaft gespeichert',
    topic: 'db1',
  },
  {
    word: 'rollback',
    hint: 'Hiermit werden DML-Aenderungen rueckgaengig gemacht',
    topic: 'db1',
  },
  {
    word: 'transaktion',
    hint: 'Atomare Einheit einer Folge von DML-Befehlen',
    topic: 'db1',
  },
  {
    word: 'wasnull',
    hint: 'Welche Methode des Interfaces ResultSet prueft, ob der letzte gelesene Wert NULL war? ...()',
    topic: 'db2',
  },
  {
    word: 'check',
    hint: 'Wie heisst das CONSTRAINT, dessen Semantik durch den Programmierer festgelegt wird?',
    topic: 'db1',
  },
  {
    word: 'unten',
    hint: 'Einen Operatorbaum liest man von',
    topic: 'db1',
  },
  {
    word: 'trigger',
    hint: 'Kann nach Inserts, Updates oder Deletes ausgeloest werden',
    topic: 'db2',
  },
  {
    word: 'replace',
    hint: 'Schluesselwort zum ueberschreiben eines Triggers (create or ...)',
    topic: 'db2',
  },
  {
    word: 'before',
    hint: 'In SQL/2003 sind DML-Befehle in Triggern mit diesem Schluesselwort verboten',
    topic: 'db2',
  },
  {
    word: 'view',
    hint: 'Hier koennen INSTEAD OF Trigger hilfreich sein',
    topic: 'db2',
  },
  {
    word: 'type',
    hint: 'Benutzerdefinierter Datentyp in Oracle',
    topic: 'db2',
  },
  {
    word: 'union',
    hint: 'Oracle Vereinigungsmenge',
    topic: 'db1',
  },
  {
    word: 'intersect',
    hint: 'Oracle Durchschnitt von Mengen',
    topic: 'db1',
  },
  {
    word: 'impendance',
    hint: '... Mismatch',
    topic: 'db1',
  },
  {
    word: 'varchar2',
    hint: 'varchar Variante',
    topic: 'db1',
  },
  {
    word: 'array',
    hint: 'geordnete, homogene Menge fester Groesse',
    topic: 'db1',
  },
  {
    word: 'chamberlain',
    hint: 'entwarf SQL (Nachname)',
    topic: 'db1',
  },
  {
    word: 'boyce',
    hint: 'entwarf SQL (Nachname)',
    topic: 'db1',
  },
  {
    word: 'persistenz',
    hint: 'Dauerhafte Speicherung',
    topic: 'db1',
  },
  {
    word: 'identifier',
    hint: 'OID=object ...',
    topic: 'db2',
  },
  {
    word: 'kleiner',
    hint: 'Im B-Baum sind Schluessel linker Kinder ... als rechter',
    topic: 'db2',
  },
  {
    word: 'index',
    hint: 'Was bedeutet I in ISAM?',
    topic: 'db2',
  },
  {
    word: 'sequential',
    hint: 'Was bedeutet S in ISAM?',
    topic: 'db2',
  },
  {
    word: 'access',
    hint: 'Was bedeutet A in ISAM?',
    topic: 'db2',
  },
  {
    word: 'method',
    hint: 'Was bedeutet M in ISAM?',
    topic: 'db2',
  },
  {
    word: 'having',
    hint: 'Where im Select auf Gruppe bezogen',
    topic: 'db1',
  },
  {
    word: 'where',
    hint: 'Select Bedingung',
    topic: 'db1',
  },
  {
    word: 'virtuell',
    hint: 'Eine nicht-materialisierte Sicht ist',
    topic: 'db2',
  },
  {
    word: 'materialisiert',
    hint: 'Eine nicht-virtuelle Sicht ist',
    topic: 'db2',
  },
  {
    word: 'wildcard',
    hint: '% und _ in LIKE',
    topic: 'db2',
  },
  {
    word: 'kommentar',
    hint: 'in PL/SQL hinter --',
    topic: 'db2',
  },
  {
    word: 'kommentar',
    hint: 'in PL/SQL zwischen /* und */',
    topic: 'db2',
  },
  {
    word: 'return',
    hint: 'PL/SQL Rueckgabe',
    topic: 'db2',
  },
  {
    word: 'mod',
    hint: 'SQL Funktion Modulo',
    topic: 'db1',
  },
  {
    word: 'nosql',
    hint: 'Not Only SQL (Abkuerzung)',
    topic: 'db2',
  },
  {
    word: 'kraehenfuss',
    hint: '...-notation (ERM)',
    topic: 'db1',
  },
  {
    word: 'alter',
    hint: 'Tabelle aendern per DDL',
    topic: 'db1',
  },
  {
    word: 'drop',
    hint: 'Gegenteil von CREATE',
    topic: 'db1',
  },
  {
    word: 'primary key',
    hint: 'Primaerschluessel',
    topic: 'db1',
  },
  {
    word: 'foreign key',
    hint: 'Fremdschluessel',
    topic: 'db1',
  },
  {
    word: 'cascade',
    hint: 'Fehlerkorrektur on delete',
    topic: 'db1',
  },
  {
    word: 'anonymer',
    hint: 'BEGIN END; ist ein ... Block',
    topic: 'db2',
  },
  {
    word: 'unaerer',
    hint: 'In der RA ist die Projektion ein ... Operator',
    topic: 'db1',
  },
]
