//-------------------------------------------------------------------------------------
var respecConfig =
{
  specStatus: "GN-WV",
  specType: "HR",
  format: "markdown",
  //-- publishDate is verplicht -------------------------------------------------------
  //-- NB: in de werkversie uitzetten, want dan pakt Respec de pushdate ---------------
  // publishDate: "2021-08-02",  	    // Format is "YYY-MM-DD"
  //-- de namen van de Editor(s) ------------------------------------------------------
  //-- vul in: per Editor: name:, company:, companyURL: -------------------------------
  github: "https://github.com/geonovum/toegankelijke-locatiedata",
  editors:
  [
    {
      name:       "Thijs Brentjens",
      company:    "Geonovum",
      companyURL: "https://geonovum.nl"
    },
  ],
  //-- de namen van de Author(s) ------------------------------------------------------
  //-- vul in: per Author: name:, company:, companyURL: -------------------------------
  // TODO: gebruik de auteurs van de vorige versie?
  authors:
  [
    {
      name:       "Edward Mac Gillavry",
      company:    "Webmapper",
      companyURL: "https://webmapper.net"
    },
    {
      name:       "Sjors Slaats",
      company:    "Tactico",
      companyURL: "http://www.tactico.nl/"
    },
    {
      name:       "Theo Overduin",
      company:    "Geonovum",
      companyURL: "https://geonovum.nl"
    },
    {
      name:       "Thijs Brentjens",
      company:    "Geonovum",
      companyURL: "https://geonovum.nl"
    },
    {
      name:       "Victor Zuydweg",
      company:    "ICTU",
      companyURL: "https://www.ictu.nl"
    },
  ],
  shortName: "toeg",
  pubDomain: "visu",  // TODO: Visualisatie of een ander pubdomain?
  //-- Repositorynaam/issues op GitHub ------------------------------------------------
  issueBase: "https://github.com/geonovum/toegankelijke-locatiedata/issues",
  license: "cc-by",
  //-- localBiblio: lokale bibliografie, voor verwijzigingen
  localBiblio:
  {
    "webgeo21":
    {
        title:      "Webrichtlijnen en geo 2.1 bèta",
        href:       "https://www.geonovum.nl/geo-standaarden/geo-op-het-web/webrichtlijnen-en-geo-20-beta",
        status:     "V2.1 beta",
        publisher:  "Geonovum",
        company:    "Geonovum",
        id: "webgeo21"
    },

  },

  //-- Voor dit blok geldt: alleen als er eerdere versies zijn en altijd beiden aan/uit!
  previousPublishDate: "2021-08-02",  	    // Format is "YYY-MM-DD"
  //previousMaturity: "CV",                   // kies 1 van deze 2 regels
  previousMaturity: "DEF",  	                // kies 1 van deze 2 regels

  //-- Optionele parameters:
  //emailComments: "mim@geonovum.nl",         // reactie mailadres, alleen bij CV!
  //subtitle: "iets",                         // Subtitel van het document
  // maxTocLevel: 3,
};
