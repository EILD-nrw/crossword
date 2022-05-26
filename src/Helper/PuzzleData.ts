import { CrosswordTask } from '../Types/CrosswordTask'

export const tasks: CrosswordTask[] = [
  {
    word: 'aggregation',
    hint: 'Besondere 1:n beziehung im EERM',
    topic: 1
  },
  {
    word: 'varray',
    hint: 'In Oracle nennt man so ein Array variabler Groesse',
    topic: 2
  },
  {
    word: 'normalisierung',
    hint: 'Prozess des Aufteilens der Daten eines relationalen Schemas zur Redundanzvermeidung',
    topic: 1
  },
  {
    word: 'keine',
    hint: 'Die Exception ORA-01403 bedeutet, ein SELECT bekam ... Daten zurueck',
    topic: 2
  },
  {
    word: 'isolationsgrad',
    hint: 'Read Commited ist ein ...',
    topic: 1
  },
  {
    word: 'ddl',
    hint: 'Data Definition Language (Abkuerzung)',
    topic: 1
  },
  {
    word: 'erd',
    hint: 'Entity Relationship Diagram (Abkuerzung)',
    topic: 1
  },
  {
    word: 'n+1',
    hint: 'Innerer Knoten mit n Eintraegen eines B-Baums vom Typ k hat so viele Nachfolger',
    topic: 2
  },
  {
    word: 'index',
    hint: 'Wie nennt man ein Verzeichnis der Gestalt: (Wert, physikalische Adresse)?',
    topic: 2
  },
  {
    word: 'administration',
    hint: 'Wofuer steht das A in DAL?',
    topic: 1
  },
  {
    word: 'manipulation',
    hint: 'Wofuer steht das M in DML?',
    topic: 1
  },
  {
    word: 'definition',
    hint: 'Wofuer steht das D in DDL?',
    topic: 1
  },
  {
    word: 'bayer',
    hint: 'Nach wem sind B-Baeume benannt? (Nachname)',
    topic: 2
  },
  {
    word: 'verlustfrei',
    hint: 'Wie heißt ein Natural Join, bei dem alle Tupel am Verbund der beiden Relationen teilnehmen?',
    topic: 1
  },
  {
    word: 'fremdschluessel',
    hint: 'Wie heißt eine Attributkombination, die Primaerschluessel einer anderen Relation ist?',
    topic: 1
  },
  {
    word: 'empty_blob()',
    hint: 'Mit welcher PL/SQL-Prozedur initialisiert man einen BLOB-Wert?',
    topic: 2
  },
  {
    word: 'isopen',
    hint: 'Mit welchem Cursor-Attribut fragt man ab, ob ein Cursor geoeffnet ist? %...',
    topic: 2
  },
  {
    word: 'notfound',
    hint: 'Mit welchem Cursor-Attribut fragt man ab, ob die letzte FETCH-Anweisung keine Zeile mehr liefert? %...',
    topic: 2
  },
  {
    word: 'rowcount',
    hint: 'Mit welchem Cursor-Attribut fragt man die Gesamtanzahl der bisher gelesenen Zeilen ab? %...',
    topic: 2
  },
  {
    word: 'serialisierbar',
    hint: 'Wie heißt ein Ausfuehrungsplan, der zu einem seriellen Ausfuehrungsplan aequivalent ist?',
    topic: 2
  },
  {
    word: 'update',
    hint: 'SQL Befehl zum Veraendern von Daten in Tabellen',
    topic: 1
  },
  {
    word: 'sqlj',
    hint: 'Welche Endung besitzen SQLJ-Quelltexte? .xxxx',
    topic: 2
  },
  {
    word: 'values',
    hint: 'Mit welchem Schluesselwort werden in SQLJ gespeicherte Funktionen (aus der Datenbank) aufgerufen?',
    topic: 2
  },
  {
    word: 'iterator',
    hint: 'Welches Konstrukt ist unter SQLJ mit dem ResultSet aus JDBC bzw. dem CURSOR in PL/SQL vergleichbar?',
    topic: 2
  },
  {
    word: 'exists',
    hint: 'Womit wird in einer SQL-Abfrage der Existenzquantor umgesetzt?',
    topic: 1
  },
  {
    word: 'jdbc',
    hint: 'Java Database Connectivity (abk.)',
    topic: 2
  },
  {
    word: 'atomicity',
    hint: 'Wofuer steht das A in ACID?',
    topic: 2
  },
  {
    word: 'consistency',
    hint: 'Wofuer steht das C in ACID?',
    topic: 2
  },
  {
    word: 'isolation',
    hint: 'Wofuer steht das I in ACID?',
    topic: 2
  },
  {
    word: 'durability',
    hint: 'Wofuer steht das D in ACID?',
    topic: 2
  },
  {
    word: 'avg',
    hint: 'Mit welcher SQL-Gruppenfunktion berechnet man den Mittelwert einer Spalte?',
    topic: 1
  },
  {
    word: 'insert',
    hint: 'SQL-Befehl zum Einfuegen von Daten in Tabellen',
    topic: 1
  },
  {
    word: 'grant',
    hint: 'Mit welchem SQL-Befehl vergibt man Rechte auf einer Tabelle?',
    topic: 1
  },
  {
    word: 'revoke',
    hint: 'Mit welchem SQL-Befehl loescht man Rechte auf einer Tabelle?',
    topic: 1
  },
  {
    word: 'sqlexception',
    hint: 'Mit welcher Ausnahme wird in JDBC ein SQL-Fehler geworfen?',
    topic: 2
  },
  {
    word: 'cursor',
    hint: 'Welches Konstrukt in PL/SQL bietet eine aehnliche Funktion wie das ResultSet in JDBC?',
    topic: 2
  },
  {
    word: 'commit',
    hint: 'Mit welchem SQL-Befehl werden temporaere aenderungen endgueltig in die Datenbank geschrieben?',
    topic: 1
  },
  {
    word: 'distinct',
    hint: 'Mit welchem Schluesselwort werden in SQL doppelte Datensaetze unterdrueckt?',
    topic: 1
  },
  {
    word: 'is null',
    hint: 'Mit welchem WHERE-Ausdruck prueft man, ob eine Spalte NULL-Werte hat?',
    topic: 1
  },
  {
    word: 'objektrelationales',
    hint: 'Wofuer steht das OR in ORDBMS?',
    topic: 2
  },
  {
    word: 'konzeptionelle',
    hint: 'logische Gesamtsicht auf die Daten im ANSI-3-Ebenen-Modell (die ... Ebene)',
    topic: 1
  },
  {
    word: 'externe',
    hint: 'Benutzersicht auf die Daten im ANSI-3-Ebenen-Modell (die ... Ebene)',
    topic: 1
  },
  {
    word: 'interne',
    hint: 'physische Sicht auf die Daten im ANSI-3-Ebenen-Modell (die ... Ebene)',
    topic: 1
  },
  {
    word: 'datenbank',
    hint: 'DB ist die Abkuerzung fuer dieses Wort',
    topic: 1
  },
  {
    word: 'datenbasis',
    hint: 'Begriff fuer die eigentlichen, persistent gespeicherten Anwendungsdaten des DBS',
    topic: 1
  },
  {
    word: 'chen',
    hint: 'Entwickler des ER-Modells (Nachname)',
    topic: 1
  },
  {
    word: 'inkonsistenz',
    hint: 'Zwei Datensaetze sind zueinander im Widerspruch',
    topic: 1
  },
  {
    word: 'aktives',
    hint: 'Ein DBS mit Triggern nennt man ein ... DBS',
    topic: 2
  },
  {
    word: 'passives',
    hint: 'Ein DBS ohne Trigger nennt man ein ... DBS',
    topic: 2
  },
  {
    word: 'inserting',
    hint: 'PL/SQL-Funktion, welche zurueckgibt ob ein Trigger durch eine Einfuegung von Daten ausgeloest wurde',
    topic: 2
  },
  {
    word: 'updating',
    hint: 'PL/SQL-Funktion, welche zurueckgibt ob ein Trigger durch eine Veraenderung von Daten ausgeloest wurde',
    topic: 2
  },
  {
    word: 'deleting',
    hint: 'PL/SQL-Funktion, welche zurueckgibt ob ein Trigger durch eine Loeschung von Daten ausgeloest wurde',
    topic: 2
  },
  {
    word: 'statement',
    hint: 'Wenn ein Trigger nicht for each row ausgefuehrt wird, wird er für das ... ausgefuehrt werden',
    topic: 2
  },
  {
    word: 'event',
    hint: 'Wofuer steht das E in ECMA?',
    topic: 2
  },
  {
    word: 'condition',
    hint: 'Wofuer steht das C in ECMA?',
    topic: 2
  },
  {
    word: 'mode',
    hint: 'Wofuer steht das M in ECMA?',
    topic: 2
  },
  {
    word: 'action',
    hint: 'Wofuer steht das A in ECMA?',
    topic: 2
  },
  {
    word: 'transitionstabelle',
    hint: 'NEW ist eine ...',
    topic: 2
  },
  {
    word: 'mutating',
    hint: 'Die Reihenfolgeunabhaengigkeit kann im relationalen Modell zum ...-Table-Problem fuehren',
    topic: 2
  },
  {
    word: 'laufzeitfehler',
    hint: 'RAISE_APPLICATION_ERROR erzeugt einen ...',
    topic: 2
  },
  {
    word: 'spalte',
    hint: 'In SQL werden Attribute einer Entitaet so bezeichnet',
    topic: 1
  },
  {
    word: 'kardinalitaet',
    hint: '1:1 und N:M stellen die ... einer Beziehung dar',
    topic: 1
  },
  {
    word: 'identifizierend',
    hint: 'Eine Beziehung die im ERM mit einer durchgezogenen Linie dargestellt wird ist',
    topic: 1
  },
  {
    word: 'identifizierend',
    hint: 'Wenn der Primaerschluessel der Master-Entity-Menge in der Detail-Entity-Menge ebenfalls PKs sind, ist die Beziehung',
    topic: 1
  },
  {
    word: 'vollstaendig',
    hint: 'Es kann keine Entitaeten des Supertyps geben, die Spezialisierung ist ...',
    topic: 2
  },
  {
    word: 'disjunkt',
    hint: 'Keine Entitaet gehoert zu mehreren Subtypen',
    topic: 2
  },
  {
    word: 'disjunkt',
    hint: 'Subtypen haben keine gemeinsamen Elemente',
    topic: 2
  },
  {
    word: 'generalisierung',
    hint: 'Prozess aus aehnlichen Subtypen einen Supertyp zu gewinnen',
    topic: 2
  },
  {
    word: 'spezialisierung',
    hint: 'Prozess aus einem Supertypen Subtypen zu gewinnen',
    topic: 2
  },
  {
    word: 'kuenstliche',
    hint: 'Um komplexe Primaerschluessel zu verhindern, kann man ... Primaerschluessel nutzen',
    topic: 1
  },
  {
    word: 'multiset',
    hint: 'Ein Set in dem Duplikate erlaubt sind',
    topic: 2
  },
  {
    word: 'horizontal',
    hint: 'Fragmentierung einer Hierarchie aus Super- und Subtypen die in mehreren Tabellen resultiert',
    topic: 2
  },
  {
    word: 'vertikal',
    hint: 'Fragmentierung einer Hierarchie aus Super- und Subtypen die in einer Tabelle resultiert',
    topic: 2
  },
  {
    word: 'nosql',
    hint: 'Key/Value-DBS sind ein Beispiel fuer ...-DBS',
    topic: 2
  },
  {
    word: 'graphen',
    hint: 'Im Gegensatz zu einer relationalen-DB konzentriert sich eine ..-DB auf vernetzte Informationen',
    topic: 2
  },
  {
    word: 'atomar',
    hint: 'Die Werte in Spalten einer Tabelle in der 1.NF sind',
    topic: 1
  },
  {
    word: 'transitiv',
    hint: 'Diese Abhaengigkeit wird in der 3NF verhindert',
    topic: 1
  },
  {
    word: 'blob',
    hint: 'Unstrukturierte Binaerdaten in Oracle',
    topic: 2
  },
  {
    word: 'fetch',
    hint: 'Befehl zum Lesen eines Cursors',
    topic: 2
  },
  {
    word: 'open',
    hint: 'Befehl zum Oeffnen eines Cursors',
    topic: 2
  },
  {
    word: 'close',
    hint: 'Befehl zum Schliessen eines Cursors',
    topic: 2
  },
  {
    word: 'dbms_output',
    hint: 'PL/SQL Package zur Ausgabe von Nachrichten',
    topic: 2
  },
  {
    word: 'anonymen',
    hint: 'EXECUTE simuliert in PL/SQL einen ... Block',
    topic: 2
  },
  {
    word: 'funktion',
    hint: 'Hat in Oracle einen Rueckgabewert',
    topic: 2
  },
  {
    word: 'prozedur',
    hint: 'Hat in Oracle keinen Rueckgabewert',
    topic: 2
  },
  {
    word: 'unknown',
    hint: 'Neben true und false gibt es in SQL',
    topic: 1
  },
  {
    word: 'null',
    hint: 'Fuehrt zur Notwendigkeit der dreiwertigen Logik in SQL',
    topic: 1
  },
  {
    word: 'to_date',
    hint: 'PL/SQL-Funktion, zur Konvertierung in das DATE-Format',
    topic: 2
  },
  {
    word: 'kartesisches',
    hint: 'Anderer Name fuer das Kreuzprodukt',
    topic: 1
  },
  {
    word: 'natural',
    hint: 'Equi-Join ohne Duplikate ist ein ...-Join',
    topic: 1
  },
  {
    word: 'equi',
    hint: 'Natural-Join mit Duplikaten ist ein ...-Join',
    topic: 1
  },
  {
    word: 'constraint',
    hint: 'Schluesselwort zum Erzwingen von Integritaetsbedingungen',
    topic: 1
  },
  {
    word: 'unique',
    hint: 'Constraint: Spaltenwerte sind eindeutig',
    topic: 1
  },
  {
    word: 'references',
    hint: 'Constraint zur Identifizierung der Master-Tabelle eines FK',
    topic: 1
  },
  {
    word: 'commit',
    hint: 'Hiermit werden DML-Aenderungen dauerhaft gespeichert',
    topic: 1
  },
  {
    word: 'rollback',
    hint: 'Hiermit werden DML-Aenderungen rueckgaengig gemacht',
    topic: 1
  },
  {
    word: 'transaktion',
    hint: 'Atomare Einheit einer Folge von DML-Befehlen',
    topic: 1
  },
  {
    word: 'wasnull',
    hint: 'Welche Methode des Interfaces ResultSet prueft, ob der letzte gelesene Wert NULL war? ...()',
    topic: 2
  },
  {
    word: 'check',
    hint: 'Wie heisst das CONSTRAINT, dessen Semantik durch den Programmierer festgelegt wird?',
    topic: 1
  },
  {
    word: 'unten',
    hint: 'Einen Operatorbaum liest man von',
    topic: 1
  },
  {
    word: 'trigger',
    hint: 'Kann nach Inserts, Updates oder Deletes ausgeloest werden',
    topic: 2
  },
  {
    word: 'replace',
    hint: 'Schluesselwort zum ueberschreiben eines Triggers (create or ...)',
    topic: 2
  },
  {
    word: 'before',
    hint: 'In SQL/2003 sind DML-Befehle in Triggern mit diesem Schluesselwort verboten',
    topic: 2
  },
  {
    word: 'view',
    hint: 'Hier koennen INSTEAD OF Trigger hilfreich sein',
    topic: 2
  },
  {
    word: 'type',
    hint: 'Benutzerdefinierter Datentyp in Oracle',
    topic: 2
  },
  {
    word: 'union',
    hint: 'Oracle Vereinigungsmenge',
    topic: 1
  },
  {
    word: 'intersect',
    hint: 'Oracle Durchschnitt von Mengen',
    topic: 1
  },
  {
    word: 'impendance',
    hint: '... Mismatch',
    topic: 1
  },
  {
    word: 'varchar2',
    hint: 'varchar Variante',
    topic: 1
  },
  {
    word: 'array',
    hint: 'geordnete, homogene Menge fester Groesse',
    topic: 1
  },
  {
    word: 'chamberlain',
    hint: 'entwarf SQL (Nachname)',
    topic: 1
  },
  {
    word: 'boyce',
    hint: 'entwarf SQL (Nachname)',
    topic: 1
  },
  {
    word: 'persistenz',
    hint: 'Dauerhafte Speicherung',
    topic: 1
  },
  {
    word: 'identifier',
    hint: 'OID=object ...',
    topic: 2
  },
  {
    word: 'kleiner',
    hint: 'Im B-Baum sind Schluessel linker Kinder ... als rechter',
    topic: 2
  },
  {
    word: 'index',
    hint: 'Was bedeutet I in ISAM?',
    topic: 2
  },
  {
    word: 'sequential',
    hint: 'Was bedeutet S in ISAM?',
    topic: 2
  },
  {
    word: 'access',
    hint: 'Was bedeutet A in ISAM?',
    topic: 2
  },
  {
    word: 'method',
    hint: 'Was bedeutet M in ISAM?',
    topic: 2
  },
  {
    word: 'having',
    hint: 'Where im Select auf Gruppe bezogen',
    topic: 1
  },
  {
    word: 'where',
    hint: 'Select Bedingung',
    topic: 1
  },
  {
    word: 'virtuell',
    hint: 'Eine nicht-materialisierte Sicht ist',
    topic: 2
  },
  {
    word: 'materialisiert',
    hint: 'Eine nicht-virtuelle Sicht ist',
    topic: 2
  },
  {
    word: 'wildcard',
    hint: '% und _ in LIKE',
    topic: 2
  },
  {
    word: 'kommentar',
    hint: 'in PL/SQL hinter --',
    topic: 2
  },
  {
    word: 'kommentar',
    hint: 'in PL/SQL zwischen /* und */',
    topic: 2
  },
  {
    word: 'return',
    hint: 'PL/SQL Rueckgabe',
    topic: 2
  },
  {
    word: 'mod',
    hint: 'SQL Funktion Modulo',
    topic: 1
  },
  {
    word: 'nosql',
    hint: 'Not Only SQL (Abkuerzung)',
    topic: 2
  },
  {
    word: 'kraehenfuss',
    hint: '...-notation (ERM)',
    topic: 1
  },
  {
    word: 'alter',
    hint: 'Tabelle aendern per DDL',
    topic: 1
  },
  {
    word: 'drop',
    hint: 'Gegenteil von CREATE',
    topic: 1
  },
  {
    word: 'primary key',
    hint: 'Primaerschluessel',
    topic: 1
  },
  {
    word: 'foreign key',
    hint: 'Fremdschluessel',
    topic: 1
  },
  {
    word: 'cascade',
    hint: 'Fehlerkorrektur on delete',
    topic: 1
  },
  {
    word: 'anonymer',
    hint: 'BEGIN END; ist ein ... Block',
    topic: 2
  },
  {
    word: 'unaerer',
    hint: 'In der RA ist die Projektion ein ... Operator',
    topic: 1
  },
  {
    word: 'primärschlüssel',
    hint: 'Identifiziert einen Entität',
    topic: 1
  },
  {
    word: 'generalisierung',
    hint: 'Prozess der Gewinnung eines Supertyps aus mehreren ähnlichen Subtypen',
    topic: 1
  },
  {
    word: 'spezialisierung',
    hint: 'Prozess der Gewinnung von Subtypen aus einem gegebenen Supertyp',
    topic: 1
  },
  {
    word: 'parser',
    hint: 'Prüft SQL Anweisungen',
    topic: 1
  },
  {
    word: 'codd',
    hint: 'Erfinder der Relationentheorie',
    topic: 1
  },
  {
    word: 'rekursiv',
    hint: 'Beziehung einer Entity-Menge auf sich selbst',
    topic: 1
  },
  {
    word: 'commit',
    hint: 'Schließt eine Transaktion ab',
    topic: 1
  },
  {
    word: 'unique',
    hint: 'SQL-Constraint für einzigartige Felder',
    topic: 1
  },
  {
    word: 'null',
    hint: 'SQL-Constraint für leere Felder',
    topic: 1
  },
  {
    word: 'optimistisch',
    hint: 'Sperrverfahren für wenig schreibende Zugriffe',
    topic: 1
  },
  {
    word: 'pessimistisch',
    hint: 'Sperrverfahren für viele schreibende Zugriffe',
    topic: 1
  },
  {
    word: 'deadlock',
    hint: 'Datenbankverklemmung',
    topic: 1
  },
  {
    word: 'NATURALJOIN',
    hint: 'Operator simulierbar durch kartesisches Produkt Selektion und Projektion (zusammen geschrieben)',
    topic: 1
  },
  {
    word: 'VERLUSTFREI',
    hint: 'Alle Tupel der Ausgangsrelationen nehmen am Verbund teil',
    topic: 1
  },
  {
    word: 'DURCHSCHNITT',
    hint: 'Mengenoperator mit einer analogen Semantik wie der Natural/Theta Join',
    topic: 1
  },
  {
    word: 'RIGHT',
    hint: 'Outer Join-Typ',
    topic: 1
  },
  {
    word: 'LEFT',
    hint: 'Outer Join-Typ',
    topic: 1
  },
  {
    word: 'SELECT',
    hint: 'Der Projektion entsprechende Klausel der SQL-Anfrage',
    topic: 1
  },
  {
    word: 'WHERE',
    hint: 'Der Selection entsprechende Klausel der SQL-Anfrage',
    topic: 1
  },
  {
    word: 'ATTRIBUTE',
    hint: 'Spalten sind ...',
    topic: 1
  },
  {
    word: 'FROM',
    hint: 'Dem kartesischen Produkt entsprechende Klausel der SQL-Anfrage',
    topic: 1
  },
  {
    word: 'THETAJOIN',
    hint: 'Join-Operator mit beliebiger selbst zu formulierender Bedingung (zusammen geschrieben)',
    topic: 1
  },
  {
    word: 'UNÄREN',
    hint: 'Projektion und Selektion sind die beiden einzigen _____ Operatoren',
    topic: 1
  },
  {
    word: 'DIFFERENZ',
    hint: 'Einziger nicht kommutativer Mengenoperator',
    topic: 1
  },
  {
    word: 'ATOMAR',
    hint: 'Eigenschaft der Attribute in der 1. NF',
    topic: 1
  }
]
