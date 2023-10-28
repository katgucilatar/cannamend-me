// RESULTS FROM MEDICAL QUESTIONNAIRE THAT SHOW RECOMMENDED STRAINS SEPARATED BY ILLNESS AND DESCRIPTION OF STRAIN
// useQuery (GET_STRAINS) based on illness
// BUTTONS NEED TO BE ALIGNED HORIZONTALLY
import { useState, useEffect } from 'react';

import { Col, Card, Button } from 'flowbite-react';

import Auth from '../utils/auth';
import { saveStrainsIds, getSavedStrainsIds } from '../utils/localStorage';
import { useMutation } from '@apollo/client';
import { SAVE_STRAIN } from '../utils/mutations';


const Results = (props) => {
    const { loading, data } = useQuery(QUERY_STRAINS);
    const strainData = data?.strain || [];

    const [savedStrainsIds, setSavedStrainsIds] = useState(getSavedStrainsIds());

    const [saveStrain, { error }] = useMutation(SAVE_STRAIN);

    useEffect(() => {
        return () => saveStrainsIds(savedStrainsIds);
      });

    const handleSaveStrain = async (strainId) => {
        const strainToSave = searchedBooks.find((book) => book.bookId === bookId);
    
        // get token
        const token = Auth.loggedIn() ? Auth.getToken() : null;
    
        if (!token) {
          return false;
        }
    
        try {
          const { data } = await saveBook({
            variables: { newBook: { ...bookToSave } },
          });
    
          // if book successfully saves to user's account, save book id to state
          setSavedBookIds([...savedBookIds, bookToSave.bookId]);
        } catch (err) {
          console.error(err);
        }
      };

    return (
    <>
        <div>
            {strainData.map((strain) => {
                return (
                    <Col>
                        <Card
                            imgAlt="Meaningful alt text for an image that is not purely decorative"
                            imgSrc="/images/blog/image-1.jpg"
                        >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <p>
                                    Noteworthy technology acquisitions 2021
                                </p>
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                <p>
                                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                                </p>
                            </p>
                            <div>
                                <Button>
                                    Learn More
                                </Button>
                                <Button>
                                    Add To List
                                </Button>
                            </div>
                        </Card>
                    </Col>
                )
            })}
        </div>
    </>
      )
    }
