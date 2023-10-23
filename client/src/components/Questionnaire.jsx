// MEDICAL QUESTIONNAIRE FORM WITH RADIO INPUTS THAT ASKS USER IF THEY HAVE ANY MEDICAL ILLNESSES
'use client';

import { useQuery } from '@apollo/client';
import { QUERY_ILLNESSES } from '../utils/queries';
import { Label, Radio } from 'flowbite-react';

const Questionnaire = () => {
    const { loading, data } = useQuery(QUERY_ILLNESSES);
    const illnessData = data?.illness || [];

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
                        value={illness.nameHyphenated} />
                        <Label htmlFor="united-state">
                          {illness.name}
                        </Label></>

                    )
                })}
          </div>
        </fieldset>
      </>
      )
    };

    export default Questionnaire;
