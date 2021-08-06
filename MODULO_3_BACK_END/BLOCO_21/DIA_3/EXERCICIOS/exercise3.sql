USE BeeMovies;

DELIMITER $$

-- DELETE
CREATE TRIGGER trigger_movie_delete
AFTER DELETE ON BeeMovies.movies
FOR EACH ROW
BEGIN 
  INSERT INTO movies_logs(movie_id, executed_action, log_date)
    VALUES(OLD.movie_id, 'DELETE', NOW());
END $$

DELIMITER ;

DELETE FROM BeeMovies.movies 
WHERE
  movie_id = 2;