import React, { useState, useEffect } from 'react';
import TechItem from './TechItem';

const TechListModal = () => {

  const [ techs, setTechs ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    getTechs();
    // es-lint-disable-next-line
  }, []);

  const getTechs = async () => {
    setLoading(true);
    // instead of axios, we're gonna use the fetch API
    const res = await fetch('/techs');
    // unlike axios we have a little extra work to do with the fetch api.
    // we have to format the response to json
    const data = await res.json();
    setTechs(data);
    setLoading(false);
  }
  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          { !loading && techs.map(tech => (
            <TechItem tech={ tech } key={ tech.id }></TechItem>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TechListModal
