import ClassificationContext from "./ClassificationContext";
import { useState, useEffect } from "react";

export default function ClassificationProvider({ children }) {
  const [allClassifications, setAllClassifications] = useState([]);
  const [allGatewayWords, setAllGatewayWords] = useState([]);
  const [gatewayWord, setGatewayWord] = useState();

  //
  // set the initial state for classifications
  const firstClassifications = [];

  sessionStorage.setItem(
    "initialClassifications",
    JSON.stringify(firstClassifications)
  );

  function initialClassificationState() {
    const classificationsData = JSON.parse(
      sessionStorage.getItem("lastClassifications")
    );
    const initialClassificationsData = JSON.parse(
      sessionStorage.getItem("initialClassifications")
    );
    if (classificationsData) {
      return classificationsData;
    } else {
      return initialClassificationsData;
    }
  }

  const [classification, setClassification] = useState(() =>
    initialClassificationState()
  );
  //
  //
  // set the initial state for projects
  const firstProjects = [];

  sessionStorage.setItem("initialProjects", JSON.stringify(firstProjects));

  function initialProjectState() {
    const projectsData = JSON.parse(sessionStorage.getItem("lastProjects"));
    const initialProjectsData = JSON.parse(
      sessionStorage.getItem("initialProjects")
    );
    if (projectsData) {
      return projectsData;
    } else {
      return initialProjectsData;
    }
  }

  const [projects, setProjects] = useState(() => initialProjectState());
  //

  useEffect(() => {
    const getAllClassifications = async () => {
      try {
        let response = await fetch("/api/classification");
        if (response.status !== 200) {
          throw new Error("Fetch for classifications failed");
        }
        let classifications = await response.json();
        setAllClassifications(classifications);
      } catch (err) {
        console.log("Error on Client-Side: Classifications", err);
      }
    };

    getAllClassifications();
  }, []);

  useEffect(() => {
    let foundGatewayWords = [];
    allClassifications.forEach((classification) => {
      let newGatewayWords = classification.gatewayWords;
      foundGatewayWords = foundGatewayWords.concat(newGatewayWords);
    });
    setAllGatewayWords(foundGatewayWords);
  }, [allClassifications]);

  useEffect(() => {
    if (gatewayWord) {
      let foundClassification = allClassifications.find((classification) => {
        return classification.gatewayWords.includes(gatewayWord);
      });
      setClassification(foundClassification);
      //
      sessionStorage.setItem(
        "lastClassifications",
        JSON.stringify(foundClassification)
      );
      //
    }
  }, [gatewayWord, allClassifications]);

  useEffect(() => {
    const getProjects = async () => {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };

      if (classification) {
        try {
          let response = await fetch(
            "/api/project/findProjectsByClassification?classificationId=" +
              classification._id,
            requestOptions
          );
          if (response.status !== 200) {
            throw new Error("Fetch for project summaries failed");
          }
          let projects = await response.json();
          setProjects(projects);
          //
          sessionStorage.setItem("lastProjects", JSON.stringify(projects));
          //
        } catch (err) {
          console.log("Error on client-side.", err);
        }
      }
    };
    getProjects();
  }, [gatewayWord, classification]);

  return (
    <ClassificationContext.Provider
      value={{
        allGatewayWords,
        gatewayWord,
        setGatewayWord,
        classification,
        projects,
      }}
    >
      {children}
    </ClassificationContext.Provider>
  );
}
