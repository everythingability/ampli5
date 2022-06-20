import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { RubricList } from "./rubric/RubricList";
import { RubricCreate } from "./rubric/RubricCreate";
import { RubricEdit } from "./rubric/RubricEdit";
import { RubricShow } from "./rubric/RubricShow";
import { SectionList } from "./section/SectionList";
import { SectionCreate } from "./section/SectionCreate";
import { SectionEdit } from "./section/SectionEdit";
import { SectionShow } from "./section/SectionShow";
import { CriteriaGroupList } from "./criteriaGroup/CriteriaGroupList";
import { CriteriaGroupCreate } from "./criteriaGroup/CriteriaGroupCreate";
import { CriteriaGroupEdit } from "./criteriaGroup/CriteriaGroupEdit";
import { CriteriaGroupShow } from "./criteriaGroup/CriteriaGroupShow";
import { MarksBandList } from "./marksBand/MarksBandList";
import { MarksBandCreate } from "./marksBand/MarksBandCreate";
import { MarksBandEdit } from "./marksBand/MarksBandEdit";
import { MarksBandShow } from "./marksBand/MarksBandShow";
import { CriterionList } from "./criterion/CriterionList";
import { CriterionCreate } from "./criterion/CriterionCreate";
import { CriterionEdit } from "./criterion/CriterionEdit";
import { CriterionShow } from "./criterion/CriterionShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"My app"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Rubric"
          list={RubricList}
          edit={RubricEdit}
          create={RubricCreate}
          show={RubricShow}
        />
        <Resource
          name="Section"
          list={SectionList}
          edit={SectionEdit}
          create={SectionCreate}
          show={SectionShow}
        />
        <Resource
          name="CriteriaGroup"
          list={CriteriaGroupList}
          edit={CriteriaGroupEdit}
          create={CriteriaGroupCreate}
          show={CriteriaGroupShow}
        />
        <Resource
          name="MarksBand"
          list={MarksBandList}
          edit={MarksBandEdit}
          create={MarksBandCreate}
          show={MarksBandShow}
        />
        <Resource
          name="Criterion"
          list={CriterionList}
          edit={CriterionEdit}
          create={CriterionCreate}
          show={CriterionShow}
        />
      </Admin>
    </div>
  );
};

export default App;
