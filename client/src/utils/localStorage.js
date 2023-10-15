// save/delete strains
// save/delete dispensary locations

export const getSavedLocationsIds = () => {
    const savedLocationsIds = localStorage.getItem('saved_locations')
      ? JSON.parse(localStorage.getItem('saved_locations'))
      : [];
  
    return savedLocationsIds;
  };
  
  export const saveLocationsIds = (locationsIdArr) => {
    if (locationsIdArr.length) {
      localStorage.setItem('saved_locations', JSON.stringify(locationsIdArr));
    } else {
      localStorage.removeItem('saved_locations');
    }
  };
  
  export const deleteLocationsId = (locationsId) => {
    const savedLocationsIds = localStorage.getItem('saved_locations')
      ? JSON.parse(localStorage.getItem('saved_locations'))
      : null;
  
    if (!savedLocationsIds) {
      return false;
    }
  
    const updatedSavedLocationsIds = savedLocationsIds?.filter((savedLocationsId) => savedLocationsId !== locationsId);
    localStorage.setItem('saved_locations', JSON.stringify(updatedSavedLocationsIds));
  
    return true;
  };

  export const getSavedStrainsIds = () => {
    const savedStrainsIds = localStorage.getItem('saved_strains')
      ? JSON.parse(localStorage.getItem('saved_strains'))
      : [];
  
    return savedStrainsIds;
  };
  
  export const saveStrainsIds = (strainsIdArr) => {
    if (strainsIdArr.length) {
      localStorage.setItem('saved_strains', JSON.stringify(strainsIdArr));
    } else {
      localStorage.removeItem('saved_strains');
    }
  };
  
  export const deleteStrainsId = (strainsId) => {
    const savedStrainsIds = localStorage.getItem('saved_strains')
      ? JSON.parse(localStorage.getItem('saved_strains'))
      : null;
  
    if (!savedStrainsIds) {
      return false;
    }
  
    const updatedSavedStrainsIds = savedStrainsIds?.filter((savedStrainsId) => savedStrainsId !== strainsId);
    localStorage.setItem('saved_strains', JSON.stringify(updatedSavedStrainsIds));
  
    return true;
  };