const { configure } = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");
const DotEnv = require("dotenv");

configure({ adapter: new Adapter() });

DotEnv.config({ path: '.env.local' });
