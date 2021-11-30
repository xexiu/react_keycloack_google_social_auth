import Keycloak from 'keycloak-js';
import keycloackConf from '../keycloack.json'

const keycloak = new (Keycloak as any)(keycloackConf);

export default keycloak