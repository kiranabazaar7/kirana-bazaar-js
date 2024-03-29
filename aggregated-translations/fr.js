'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _fr = require('react-intl/locale-data/fr');

var _fr2 = _interopRequireDefault(_fr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_fr2.default);

var messages = {
  "Terra.actionHeader.back": "Précédent",
  "Terra.actionHeader.close": "Fermer",
  "Terra.actionHeader.maximize": "Agrandir",
  "Terra.actionHeader.minimize": "Réduire",
  "Terra.actionHeader.next": "Suivant",
  "Terra.actionHeader.previous": "Précédent",
  "Terra.ajax.error": "Échec du chargement du contenu.",
  "Terra.application.tabs.more": "Plus",
  "Terra.application.utility.back": "Retour",
  "Terra.application.utility.button": "Bouton Utilitaire",
  "Terra.application.utility.close": "Fermer",
  "Terra.application.utility.menu": "Menu Utilitaire",
  "Terra.ApplicationHeaderLayout.SkipToContent": "Accéder au contenu",
  "Terra.applicationLayout.applicationHeader.menuToggleLabel": "Menu",
  "Terra.applicationLayout.utilityDefaults.about": "À propos de",
  "Terra.applicationLayout.utilityDefaults.appearance": "Apparence",
  "Terra.applicationLayout.utilityDefaults.changePhoto": "Changer de photo",
  "Terra.applicationLayout.utilityDefaults.gettingStarted": "Premiers pas",
  "Terra.applicationLayout.utilityDefaults.help": "Aide",
  "Terra.applicationLayout.utilityDefaults.logOut": "Déconnexion",
  "Terra.applicationLayout.utilityDefaults.menu": "Menu",
  "Terra.applicationLayout.utilityDefaults.security": "Sécurité",
  "Terra.applicationLayout.utilityDefaults.settings": "Paramètres",
  "Terra.applicationLayout.utilityDefaults.termsOfUse": "Conditions d'utilisation",
  "Terra.applicationLayout.utilityDefaults.userInformation": "Informations sur l'utilisateur",
  "Terra.devSiteRoutingMenu.filter": "Filtre",
  "Terra.form.field.optional": "(facultatif)",
  "Terra.Overlay.loading": "Chargement...",
  "Terra.popup.header.close": "Fermer",
  "Terra.searchField.search": "Rechercher",
  "Terra.searchField.submit-search": "Soumettre la recherche"
};
var areTranslationsLoaded = true;
var locale = 'fr';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;
