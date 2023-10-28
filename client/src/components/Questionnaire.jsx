// MEDICAL QUESTIONNAIRE FORM WITH RADIO INPUTS THAT ASKS USER IF THEY HAVE ANY MEDICAL ILLNESSES
//useState to show results based on the illness(es) user provided
//state that changes is illnesses, use useState hook upon clicking of submit button
// link to Results page upon onClick
// ADD BUTTON AT END AND IMPORT FROM FLOWBITE



'use client';

import { useQuery } from '@apollo/client';
import { QUERY_ILLNESSES } from '../utils/queries';
import { Label, Radio } from 'flowbite-react';
import { useState } from 'react';

const Questionnaire = () => {
    const { loading, data } = useQuery(QUERY_ILLNESSES);
    const illnessData = data?.illness || [];

    let [illness, setIllness] = useState();

    const handleIllness = () => {
      if (illness === "Cancer") {
        setIllness("Cancer")
      } else if (illness === "HIV/AIDS") {
        setIllness("HIV/AIDS")
      } else if (illness === "Epilepsy/Seizures") {
        setIllness("Epilepsy/Seizures")
      } else if (illness === "Glaucoma") {
        setIllness("Glaucoma")
      } else if (illness === "Chronic pain") {
        setIllness("Chronic pain")
      } else if (illness === "Nausea") {
        setIllness("Nausea")
      } else if (illness === "Muscle spasms/Multiple schlerosis") {
        setIllness("Muscle spasms/Multiple schlerosis")
      } else if (illness === "PTSD") {
        setIllness("PTSD")
      } else if (illness === "Stress/Anxiety disorders") {
        setIllness("Stress/Anxiety disorders")
      } else if (illness === "Eating disorders") {
        setIllness("Eating disorders")
      } else {
        throw new Error('something went wrong!')
      }
    }

    return (
      <>
        <fieldset
          className="flex max-w-md flex-col gap-4"
          id="radio"
        >
          <legend className="mb-4">
            Do any of these illnesses apply to you?
          </legend>
          <div className="flex items-center gap-2">
                {illnessData.map((illness) => {
                    return (
                        <><Radio
                        id={illness.nameHyphenated}
                        name="illnesses"
                        value={illness.nameHyphenated}
                        onClick={handleIllness} />
                        <Label htmlFor={illness.nameHyphenated}>
                          {illness.name}
                        </Label></>

                    )
                })}
          </div>
        </fieldset>
        <Button gradientDuoTone="tealToLime">
        Submit
        </Button>
      </>
      )
    };

    export default Questionnaire;
