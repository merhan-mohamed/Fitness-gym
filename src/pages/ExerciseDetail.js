import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';

import Details from '../components/Details';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercise from '../components/SimilarExercise';
import { useParams } from 'react-router-dom';
import { fetchData, exerciseOptions, youtubeOptions } from '../utils/fetchData';





const ExerciseDetail = () => {
  
  const[exerciseDetail, setExerciseDetail] = useState({});
  const {id} = useParams(); 
  const[Exercisevideos, setExercisevideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);


  useEffect(()=> {
    const fetchExerciseData = async () => {
      
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      console.log({exerciseDetailData})
      setExerciseDetail(exerciseDetailData);


      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
      
      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}exercise` , youtubeOptions);
      console.log(exerciseVideosData);
      setExercisevideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercises(equimentExercisesData);

    }


    fetchExerciseData();
  },[id]);

  return (
    <Box sx= {{ mt: { lg: '96px', xs: '60px' } }}>
      <Details exerciseDetail={exerciseDetail}/>
      <ExerciseVideos Exercisevideos={Exercisevideos} name={exerciseDetail.name} />
      <SimilarExercise targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  );
};

export default ExerciseDetail
