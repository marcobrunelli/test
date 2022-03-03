import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import DatabaseList from './pages/DatabaseList.js';
import TableList from './pages/TableList.js';
import TableData from './pages/TableData.js';
import TableProperties from './pages/TableProperties.js';
import TableIndices from './pages/TableIndices.js';
import InsertRow from './pages/InsertRow.js';
import SettingsUsers from './pages/SettingsUsers.js';
import SettingsUsersInsert from './pages/SettingsUsersInsert.js';
import UserSinglePage from './pages/UserSinglePage.js';
import SettingsUserSchema from './pages/SettingsUserSchema.js';
import SettingsUserTables from './pages/SettingsUserTables.js';
import SettingsRoles from './pages/SettingsRoles.js';
import SettingsRolesInsert from './pages/SettingsRolesInsert.js';
import SettingsProfilies from './pages/SettingsProfilies.js';
import SettingsProfileInsert from './pages/SettingsProfileInsert.js';
import SettingsTables from './pages/SettingsTables.js';
import SettingsInsertTables from './pages/SettingsInsertTables.js';
import Credits from './pages/Credits.js';
import Logs from './pages/Logs.js';
import InsertRowOracle from './pages/oracle/InsertRowOracle.js';
import TableDataOracle from './pages/oracle/TableDataOracle.js';
import SettingsDatabase from './pages/SettingsDatabase.js';
import SettingsDatabaseInsert from './pages/SettingsDatabaseInsert.js';


import NotFound from './pages/NotFound.js';
import { BrowserRouter as Router, HashRouter, Route, Switch} from 'react-router-dom';

function App() {

  return(
        <div className="App">
          <HashRouter>
            <Switch>
               <Route exact path='/' component={DatabaseList} />
               <Route exact path='/database/:database' component={DatabaseList} />



               <Route exact path='/table-data-DB2/:database/:schema/:tablename' component={TableData} />
               <Route exact path='/insert-row/:database/:schema/:tablename' component={InsertRow} />

               <Route exact path='/table-data-ORA/:database/:schema/:tablename' component={TableDataOracle} />



               <Route exact path='/table-properties/:database/:schema/:tablename' component={TableProperties} />
               <Route exact path='/table-indices/:database/:schema/:tablename' component={TableIndices} />
               <Route exact path='/settings-users' component={SettingsUsers} />
               <Route exact path='/settings-users-insert' component={SettingsUsersInsert} />

               <Route exact path='/settings-user-single/:user' component={UserSinglePage} />
               <Route exact path='/settings-user-schema/:user' component={SettingsUserSchema} />
               <Route exact path='/settings-user-tables/:user' component={SettingsUserTables} />

               <Route exact path='/settings-roles' component={SettingsRoles} />
               <Route exact path='/settings-roles-insert' component={SettingsRolesInsert} />
               <Route exact path='/settings-profilies' component={SettingsProfilies} />
               <Route exact path='/settings-profilo-insert' component={SettingsProfileInsert} />
               <Route exact path='/settings-tables' component={SettingsTables} />
               <Route exact path='/settings-tables-insert' component={SettingsInsertTables} />
               <Route exact path='/settings-logs' component={Logs} />
               <Route exact path='/settings-credits' component={Credits} />

               <Route exact path='/settings-database' component={SettingsDatabase} />
               <Route exact path='/settings-database-insert' component={SettingsDatabaseInsert} />


               <Route component={NotFound} />
            </Switch>
          </HashRouter>

        </div>
  );
}

export default App;
