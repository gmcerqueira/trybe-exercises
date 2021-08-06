USE BeeMovies;

DELIMITER $$

-- INSERT
CREATE TRIGGER trigger_movie_insert
BEFORE INSERT ON BeeMovies.movies
FOR EACH ROW
BEGIN 
  SET NEW.release_year = YEAR(NOW()) ;
END $$

CREATE TRIGGER trigger_movie_log_insert
AFTER INSERT ON BeeMovies.movies
FOR EACH ROW
BEGIN 
INSERT INTO BeeMovies.movies_logs(movie_id, executed_action, log_date)
  VALUES(NEW.movie_id, 'INSERT', NOW());
END $$

DELIMITER ;

INSERT INTO BeeMovies.movies(ticket_price) VALUES (12.34);