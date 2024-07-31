// splice()
// removes / replace / adds new elements
// it is a mutable version

// to create without mutating the original array
// we use toSpliced()

//Q1. Implement getUserAge function

const userData = {
  user: {
    profile: {
      name: "Alice",
      age: null,
    },
  },
};

function getUserAge(userData) {
  return userData?.user?.profile?.age ?? "Age not provided";
}

console.log(getUserAge(userData)); // Should print: Age not provided
console.log(getUserAge({ user: { profile: { age: 25 } } })); // Should print: 25
console.log(getUserAge({ user: {} })); // Should print: Age not provided

//Q2. Write a function that returns a new array with an additional skill for each employee.

const employees = [
  {
    id: 1,
    name: "Alice",
    position: "Developer",
    skills: ["JavaScript", "React"],
  },
  {
    id: 2,
    name: "Bob",
    position: "Manager",
    skills: ["Leadership", "Communication"],
  },
  { id: 3, name: "Charlie", position: "CEO", skills: ["Strategy", "Vision"] },
];

// function addSkill(employees, str) {
//   const abc = employees.map(employee => employee.skills);
//   return abc;
// }

function addSkill(employees, str) {
  const updatedEmployees = employees.map((employee) => ({
    ...employee,
    skills: [...employee.skills, str],
  }));

  return updatedEmployees;
}

console.log(addSkill(employees, "Problem Solving"));
// Should print:
// [
//   { id: 1, name: "Alice", position: "Developer", skills: ["JavaScript", "React", "Problem Solving"] },
//   { id: 2, name: "Bob", position: "Manager", skills: ["Leadership", "Communication", "Problem Solving"] },
//   { id: 3, name: "Charlie", position: "CEO", skills: ["Strategy", "Vision", "Problem Solving"] }
// ]

//Q3. Find the total price of all products using arrow functions and array methods - Implement getTotalPrice

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 700 },
];

function getTotalPrice(products) {
  const sum = products
    .map((product) => product.price)
    .reduce((acc, price) => acc + price, 0);
  return sum;
}

console.log(getTotalPrice(products)); // Should print: 2200

//Q4: Write a function that extracts the user's name and theme, providing default values if they are missing

const userProfile = {
  id: 1,
  name: "Eve",
  settings: {
    theme: "dark",
  },
};

function getUserSettings(userProfile) {
  const profileTheme = userProfile?.settings?.theme ?? "light";

  return `${userProfile.name} prefers the ${profileTheme} theme`;
}

console.log(getUserSettings(userProfile)); // Should print: Eve prefers the dark theme
console.log(getUserSettings({ id: 2, name: "Adam" })); // Should print: Adam prefers the light theme

function getUserSettings1(userProfile) {
  const { username, Theme } = {
    username: userProfile.name,
    Theme: userProfile?.settings?.theme ?? "light",
  };

  return `${username} prefers the ${Theme} theme`;
}

console.log(getUserSettings1(userProfile)); // Should print: Eve prefers the dark theme
console.log(getUserSettings1({ id: 2, name: "Adam" }));

//Q5: Write a function that takes a user object and returns a message indicating if the user is active or not
const user1 = { name: "Jane", active: true };
const user2 = { name: "John", active: false };

function getUserStatus(user) {
  return user.active
    ? `${user.name} is currently active`
    : `${user.name} is currently inactive`;
}

console.log(getUserStatus(user1)); // Should print: Jane is currently active
console.log(getUserStatus(user2)); // Should print: John is currently inactive

//Q6: Write a function that returns the user's age if available, or a default message if not, using nullish coalescing and optional chaining

const userWithFullProfile = {
  id: 1,
  name: "Alice",
  profile: {
    age: 25,
    address: {
      city: "Wonderland",
      zip: "12345",
    },
  },
};

const userWithPartialProfile = {
  id: 2,
  name: "Bob",
  profile: {
    age: null,
  },
};

function getUserAge1(userWithProfile) {
  const checkAge = userWithProfile?.profile?.age || "Age not provided";

  return checkAge;
}

console.log(getUserAge1(userWithFullProfile)); // Should print: 25
console.log(getUserAge1(userWithPartialProfile)); // Should print: Age not provided
console.log(getUserAge1({ id: 3, name: "Charlie" })); // Should print: Age not provided

//Q7: Write a function that generates a summary string for the top scorer using template literals and array methods

const scores = [
  { name: "Alice", score: 90 },
  { name: "Bob", score: 85 },
  { name: "Charlie", score: 92 },
];

function getTopScorer(scoreOfStudent) {
  const topStudent = scoreOfStudent
    .sort((a, b) => b.score - a.score)
    .slice(0, 1)
    .map((score) => score.name);

  const topScore = scoreOfStudent
    .sort((a, b) => b.score - a.score)
    .slice(0, 1)
    .map((a) => a.score);

  return `${topStudent} is the top scorer with a score of ${topScore} `;
}

console.log(getTopScorer(scores)); // Should print: Charlie is the top scorer with a score of 92.

//Q8: Create a function that returns a greeting message based on the time of day

// Create a function that returns a greeting message based on the time of day

function greet(name) {
  const date = new Date();
  const hour = date.getHours();
  if (hour <= 12) {
    return `Good morning, ${name}!`;
  } else if (hour > 12 && hour <= 18) {
    return `Good afternoon, ${name}!`;
  } else {
    return `Good evening, ${name}!`;
  }
}

console.log(greet("Alice")); // Good morning, Alice! (If the time 10am)
console.log(greet("Alice")); // Good afternoon, Alice! (If the time 1pm)
console.log(greet("Alice")); // Good evening, Alice! (If the time 7pm)

//Q9: Write a function that returns the name of a user's first friend using nested destructuring
const users = [
  { id: 1, name: "Alice", friends: [{ name: "Bob" }, { name: "Charlie" }] },
  { id: 2, name: "David", friends: [{ name: "Eve" }, { name: "Frank" }] },
  { id: 4, name: "Deepak", friends: [] },
];

// function getFirstFriendName(idnumber) {
//  const { id, name, friends } = {
//     id: users.id,
//      name: users.name,
//      friends:
//   };

//    return users.friends.name[0];
//  }

const movies = [
  {
    id: 1,
    title: "Baahubali",
    director: "S. S. Rajamouli",
    year: 2015,
    ratings: [8, 9, 10],
    genre: "Action",
  },
  {
    id: 2,
    title: "Arjun Reddy",
    director: "Sandeep Reddy Vanga",
    year: 2017,
    ratings: [9, 8, 9],
    genre: "Drama",
  },
  {
    id: 3,
    title: "Mahanati",
    director: "Nag Ashwin",
    year: 2018,
    ratings: [10, 9, 8],
    genre: "Biography",
  },
  {
    id: 4,
    title: "Eega",
    director: "S. S. Rajamouli",
    year: 2012,
    ratings: [7, 8, 9],
    genre: "Fantasy",
  },
  {
    id: 5,
    title: "Jersey",
    director: "Gowtam Tinnanuri",
    year: 2019,
    ratings: [9, 9, 8],
    genre: "Sports",
  },
];

//Q10. Write a function that finds a movie by id and returns its title and genre in a formatted string

function getMovieDetails(movieid) {
  const movieTitle = movies.find((movie) => movie.id == movieid);

  return movieTitle
    ? `${movieTitle.title} is an ${movieTitle.genre}`
    : "Movie not found";
}

console.log(getMovieDetails(1)); // Should print: Baahubali is an Action movie
console.log(getMovieDetails(5)); // Should print: Jersey is a Sports movie
console.log(getMovieDetails(6)); // Should print: Movie not found

//Q11. Write a function that filters out movies released before a certain year and calculates the average rating of the remaining movies (Rating must be rounded)

function getAverageRatingAfterYear(year) {
  const filterMovie = movies.filter((movie) => movie.year > year);

  const len = filterMovie.map((movie) => movie.ratings);
  const len1 = [].concat(...len);

  if (filterMovie.length === 0) {
    return "No movies after the specified year";
  }
  const totalsum = filterMovie.reduce(
    (acc, movie) => acc + movie.ratings.reduce((a, b) => a + b, 0),
    0
  );

  return Math.round(totalsum / len1.length);
}

console.log(getAverageRatingAfterYear(2016)); // Should print: 8.83 (average rating of Arjun Reddy, Mahanati, and Jersey)
console.log(getAverageRatingAfterYear(2020)); // Should print: No movies after the specified year

//Q12: Write a function that checks if all movies of a certain genre have ratings above a certain value

function allRatingsAboveForGenre(CertainValue, movieGenre) {
  const CertainMovies = movies.filter((movie) => movie.genre === movieGenre);

  const movies1 = CertainMovies.every((movie) =>
    movie.ratings.every((rating) => rating > CertainValue)
  );

  if (movies1) {
    return `Yes, all ${movieGenre} movies are above ${CertainValue} ratings`;
  } else {
    return `No, not all ${movieGenre} movies are above ${CertainValue} ratings`;
  }
}

console.log(allRatingsAboveForGenre(7, "Action")); // Should print: Yes, all Action movies are above 7 ratings
console.log(allRatingsAboveForGenre(8, "Biography")); // Should print: No, not all Biography movies are above 8 ratings

//Q13: Write a function that returns a string with each movie's title and its ratings joined by commas
function getTitlesAndRatings() {
  const titleAndRating = movies.map(
    (movie) => `${movie.title}: ${movie.ratings.join(",")}`
  );
  return titleAndRating.join("|");
}

console.log(getTitlesAndRatings());
// Should print: Baahubali: 8, 9, 10 | Arjun Reddy: 9, 8, 9 | Mahanati: 10, 9, 8 | Eega: 7, 8, 9 | Jersey: 9, 9, 8

//Q14: Write a function that returns a single array containing all ratings of all movies

function getAllRatings() {
  const Allratings = movies.map((movie) => movie.ratings);
  return [].concat(...Allratings);
}
console.log(getAllRatings());
// Should print: [8, 9, 10, 9, 8, 9, 10, 9, 8, 7, 8, 9, 9, 9, 8]

//Q15: Write a function that returns an array of titles of movies that have ratings above a certain threshold in any rating

function getTitlesWithHighRatings(thresholdRating) {
  const getTitles = movies
    .filter((movie) => movie.ratings.some((rating) => rating > thresholdRating))
    .map((movie) => movie.title);

  return getTitles;
}

console.log(getTitlesWithHighRatings(9)); // Should print: ["Baahubali", "Arjun Reddy", "Mahanati", "Jersey"]
console.log(getTitlesWithHighRatings(10)); // Should print: ["Mahanati"]

//Q16: Write a function that returns an array of movie titles sorted by their average ratings in descending order

function getTitlesSortedByAverageRating() {
  const answerTitle = movies.map((movie) => {
    const getSum = movie.ratings.reduce((acc, curr) => acc + curr, 0);
    const getAvg = getSum / movie.ratings.length;
    return { title: movie.title, averagerating: getAvg };
  });

  return answerTitle
    .sort((a, b) => b.getAvg - a.getAvg)
    .map((movie) => movie.title);
}

console.log(getTitlesSortedByAverageRating()); // Should print: ["Baahubali", "Arjun Reddy", "Jersey", "Mahanati", "Eega"]

//Q17: Write a function that finds the movie with the highest average rating and returns its title

function getMovieWithHighestAverageRating() {
  const answerTitle = movies.map((movie) => {
    const getSum = movie.ratings.reduce((acc, curr) => acc + curr, 0);
    const getAvg = getSum / movie.ratings.length;
    return { title: movie.title, averagerating: getAvg };
  });

  return answerTitle
    .sort((a, b) => b.getAvg - a.getAvg)
    .map((movie) => movie.title)
    .slice(0, 1);
}

console.log(getMovieWithHighestAverageRating()); // Should print: Baahubali

//Q18: Write a function that returns an array of movie titles released after a certain year

function getTitlesAfterYear(year) {
  const filteredTitles = movies
    .filter((movie) => movie.year > year)
    .map((movie) => movie.title);
  return filteredTitles;
}
console.log(getTitlesAfterYear(2015)); // Should print: ["Arjun Reddy", "Mahanati", "Jersey"]
console.log(getTitlesAfterYear(2018)); // Should print: ["Jersey"]

//Q19: Write a function that finds a movie by its title and returns a formatted string with its director and year

function getMovieInfoByTitle(giventitle) {
  const info = movies.find((movie) => movie.title === giventitle);
  if (info) {
    return `${info.title} directed by ${info.director} was released in ${info.year}`;
  } else {
    return "Movie not found";
  }
}

console.log(getMovieInfoByTitle("Baahubali")); // Should print: Baahubali directed by S. S. Rajamouli was released in 2015
console.log(getMovieInfoByTitle("Jersey")); // Should print: Jersey directed by Gowtam Tinnanuri was released in 2019
console.log(getMovieInfoByTitle("Avatar")); // Should print: Movie not found

//Q20: Write a function that returns an array of titles of movies that have at least one rating below a certain threshold

function getTitlesWithLowRatings(threshold) {
  const LowRatingMovies = movies
    .filter((movie) => movie.ratings.some((rating) => rating < threshold))
    .map((movie) => movie.title);

  return LowRatingMovies;
}

console.log(getTitlesWithLowRatings(8)); // Should print: ["Eega"]
console.log(getTitlesWithLowRatings(9)); // Should print: ["Baahubali", "Mahanati", "Eega", "Jersey"]

//Q21: Write a function that calculates the total number of ratings for movies of a specific genre

function getTotalRatingsByGenre(genre) {
  const filterMovies = movies.filter((movie) => movie.genre === genre);
  const NoOfRating = filterMovies.map((movie) => movie.ratings);
  const answ = [].concat(...NoOfRating);

  return answ.length;
}

console.log(getTotalRatingsByGenre("Action")); // Should print: 3
console.log(getTotalRatingsByGenre("Drama")); // Should print: 3

//Q22: Write a function that returns an array of movies where the average rating is above a certain value, including the average rating in the result

function getMoviesWithHighAverageRating(thresholdRating) {
  const getHighAvgMovies = movies
    .map((movie) => {
      const getSum1 = movie.ratings.reduce((curr, acc) => curr + acc, 0);
      const getAvg1 = getSum1 / movie.ratings.length;
      //const filterHighAvgMovies = getHighAvgMovies.filter((movie) => movie.getAvg1);
      return { title: movie.title, avgRate: getAvg1.toFixed(2) };
    })
    .filter((movie) => movie.avgRate > thresholdRating)
    .map(
      (movie) => `${movie.title} has an average rating of ${movie.avgRate} `
    );

  return getHighAvgMovies;
}

console.log(getMoviesWithHighAverageRating(8.5));

//Q23: Write a function that returns an array of movie titles directed by a specific director, sorted by year in ascending order

function getTitlesByDirectorSortedByYear(DirectorName) {
  const TitlesByDirector = movies.filter(
    (movie) => movie.director === DirectorName
  );
  const TitlesByyear = TitlesByDirector.sort((a, b) => a.year - b.year).map(
    (movie) => movie.title
  );
  return TitlesByyear;
}

console.log(getTitlesByDirectorSortedByYear("S. S. Rajamouli")); // Should print: ["Eega", "Baahubali"]
console.log(getTitlesByDirectorSortedByYear("Nag Ashwin")); // Should print: ["Mahanati"]

//Q24: Write a function that returns the average rating of movies released in a specific year

function getAverageRatingByYear(givenYear) {
  const filterYear = movies.filter((movie) => movie.year === givenYear);

  if (!filterYear) {
    return "No movies released in the specified year";
  }
  const avgRatingg = movies
    .filter((movie) => movie.year === givenYear)
    .map((movie) => movie.ratings);

  const res = [].concat(...avgRatingg);

  const answer = res.reduce((curr, acc) => curr + acc, 0) / res.length;

  return answer;
}

console.log(getAverageRatingByYear(2018)); // Should print: 9.00
console.log(getAverageRatingByYear(2015)); // Should print: "No movies released in the specified year"

//Q25: Write a function that returns an array of objects with movie titles and their highest ratings

function getMoviesWithHighestRatings() {
  const HighRatedMovies = movies.map((movie) => {
    const highestRating = movie.ratings.reduce(
      (acc, curr) => (acc > curr ? acc : curr),
      0
    );
    return { title: movie.title, highestRating: highestRating };
  });
  return HighRatedMovies;
}
console.log(getMoviesWithHighestRatings());

// Should print: [{ title: "Baahubali", highestRating: 10 }, { title: "Arjun Reddy", highestRating: 9 }, { title: "Mahanati", highestRating: 10 }, { title: "Eega", highestRating: 9 }, { title: "Jersey", highestRating: 9 }]

// Interpolation has expressions but not statements

//Q26: Write a function that returns the director with the most movies directed

function getDirectorWithMostMovies() {
  const answer4 = movies.reduce((acc, movie) => {
    acc[movie.director] = (acc[movie.director] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(answer4).reduce((a, b) =>
    answer4[a] > answer4[b] ? a : b
  );
}

console.log(getDirectorWithMostMovies()); // Should print the director with the most movies

//Q27: Write a function that merges two arrays of movies into one using the spread operator

const moreMovies = [
  {
    id: 6,
    title: "RRR",
    director: "S. S. Rajamouli",
    year: 2022,
    ratings: [10, 10, 9],
    genre: "Action",
  },
  {
    id: 7,
    title: "Pushpa",
    director: "Sukumar",
    year: 2021,
    ratings: [8, 9, 8],
    genre: "Action",
  },
];

function mergeMovies(movies, moreMovies) {
  const res = [...movies, ...moreMovies];
  return res.map((movie) => movie.title);
}

console.log(mergeMovies(movies, moreMovies));

//Q28: Write a function that accepts any number of movie objects and returns an array of their titles using the rest operator

function getTitles(...movies) {
  const result = [...movies].map((movie) => movie.title);
  return result;
}

console.log(getTitles(...movies)); // Should print titles of all movies in the array
console.log(getTitles(movies[0], movies[1])); // Should print: ["Baahubali", "Arjun Reddy"]

//Q29: Write a function that merges two arrays of movies into one using the spread operator and provides a default value for the second array

function mergeMovies1(movies, moreMovies = []) {
  const res = [...movies, ...moreMovies];
  return res;
}

console.log(mergeMovies1(movies, moreMovies)); // Should print the merged array of movies
console.log(mergeMovies1(movies)); // Should print the original array of movies

// 1-10,11-20,21,22,23,24,25,27,28,29,

// Q30: Write a function that returns the last N movie titles, using slice and spread operator with a default value for N

function getLastNMovieTitles(N = 3) {
  const LastMovies = movies.slice(-N).map((movie) => movie.title);
  return LastMovies;
}

console.log(getLastNMovieTitles()); // Output: ["Mahanati", "Eega", "Jersey"] (default N = 3)
console.log(getLastNMovieTitles(2)); // Should print the last 2 movie titles

// 1-10,11-20,21,22,23,24,25,27,28,29,30,31

//Q31: Write a function that accepts multiple movie IDs, fetches the titles, and returns a formatted string using the rest operator, nullish coalescing, and template literals Interesting

function getMovieTitlesByIds(...ids) {
  return `Selected Movies: ${ids
    .map((id) => {
      const movie = movies.find((movie) => movie.id === id);
      return movie ? movie.title : "Unknown Title";
    })
    .join(", ")}`;
}

console.log(getMovieTitlesByIds(1, 3, 5));
// Should print: Selected Movies: Baahubali, Mahanati, Jersey
console.log(getMovieTitlesByIds(1, 6));
// Should print: Selected Movies: Baahubali, Unknown Title
console.log(getMovieTitlesByIds(5, 1));
// Should print: Selected Movies: Jersey, Baahubali

//Q32: Write a function that accepts any number of movies and returns a formatted string listing their titles and genres using the rest operator, nullish coalescing, and template literals Interesting

function listMovies(...movies) {
  const answer2 = movies
    .map((movie) => {
      const listmovie =
        movie && movie.title
          ? `${movie.title} (${movie.genre})`
          : "Unknown Title (Unknown Genre)";
      return listmovie;
    })
    .join(",");

  return answer2;
}

console.log(listMovies(...movies));
// Should print: Baahubali (Action), Arjun Reddy (Drama), Mahanati (Biography), Eega (Fantasy), Jersey (Sports)
console.log(listMovies(movies[0], movies[1], movies[111]));
// Should print: Baahubali (Action), Arjun Reddy (Drama), Unknown Title (Unknown Genre)

//Q33: Write a function that calculates the total number of ratings for each director Challenging
function getTotalRatingsForDirectors() {
  const answer3 = movies.reduce((acc, movie) => {
    acc[movie.director] = (acc[movie.director] || 0) + movie.ratings.length;
    return acc;
  }, {});

  return answer3;
}

console.log(getTotalRatingsForDirectors());
// Should print: { "S. S. Rajamouli": 6, "Sandeep Reddy Vanga": 3, "Nag Ashwin": 3, "Gowtam Tinnanuri": 3 }

//Q34: Write a function that returns an array of genres sorted by the total number of ratings received by movies in that genre

// function getGenresSortedByTotalRatings() {
//   const allMovies = mergeMovies(movies, moreMovies);
//   const genreRatings = {};

//   allMovies.forEach((movie) => {
//     const genre = movie.genre;
//     const totalRatings = movie.ratings.reduce((sum, rating) => sum + rating, 0);
//     if (!genreRatings[genre]) {
//       genreRatings[genre] = 0;
//     }

//     genreRatings[genre] += totalRatings;
//   });
//   const sortedGenres = Object.entries(genreRatings).sort((a, b) => b[1] - a[1]);
//   return sortedGenres.map(([genre]) => genre);
// }

// console.log(getGenresSortedByTotalRatings()); // Should print genres sorted by total ratings

//Q35: Write a function that returns an array of movie titles directed by directors who have directed more than one movie Challenging

function getTitlesByDirectorsWithMultipleMovies() {
  const allMovies = mergeMovies(movies, moreMovies);
  const directorMovieCount = {};

  allMovies.forEach((movie) => {
    if (movie && movie.director) {
      if (!directorMovieCount[movie.director]) {
        directorMovieCount[movie.director] = 0;
      }
      directorMovieCount[movie.director]++;
    }
  });

  const directorsWithMultipleMovies = new Set(
    Object.entries(directorMovieCount)
      .filter(([director, count]) => count > 1)
      .map(([director]) => director)
  );
  const filteredMovies = allMovies.filter((movie) =>
    directorsWithMultipleMovies.has(movie.director)
  );
  const movieTitles = filteredMovies.map((movie) => movie.title);

  return movieTitles;
}

console.log(getTitlesByDirectorsWithMultipleMovies()); // Should print: ["Baahubali", "Eega"]

//Q34: Write a function that returns an array of genres sorted by the total number of ratings
// received by movies in that genre Challenging
const getGenresSortedByTotalRatings = () => {
  const genreRatings = movies.reduce((acc, movie) => {
    if (acc[movie.genre]) {
      acc[movie.genre] += movie.ratings.length;
    } else {
      acc[movie.genre] = movie.ratings.length;
    }
    return acc;
  }, {});
  return Object.entries(genreRatings)
    .sort(([, a], [, b]) => b - a)
    .map(([genre]) => genre);
};
// console.log(getGenresSortedByTotalRatings()); // Should print genres sorted by total ratings
// Q35: Write a function that returns an array of movie titles directed by directors who have directed
// more than one movie Challenging
function getTitlesByDirectorsWithMultipleMovies() {
  const directors = movies.reduce((acc, movie) => {
    if (acc[movie.director]) {
      acc[movie.director]++;
    } else {
      acc[movie.director] = 1;
    }
    return acc;
  }, {});
  const multiDirectors = Object.keys(directors).filter(
    (director) => directors[director] > 1
  );
  return movies
    .filter((movie) => multiDirectors.includes(movie.director))
    .map((movie) => movie.title);
}
// console.log(getTitlesByDirectorsWithMultipleMovies()); // Should print: ["Baahubali", "Eega"]
// Q36: Write a function that calculates the total number of ratings for each genre and returns the
// genre with the highest total ratings Challenging
const getGenreWithHighestTotalRatings = () => {
  const genreRatings = movies.reduce((acc, movie) => {
    if (acc[movie.genre]) {
      acc[movie.genre] += movie.ratings.length;
    } else {
      acc[movie.genre] = movie.ratings.length;
    }
    return acc;
  }, {});
  const highestRatingsGenre = Object.entries(genreRatings).reduce(
    ([genreA, ratingA], [genreB, ratingB]) =>
      ratingA > ratingB ? [genreA, ratingA] : [genreB, ratingB]
  );
  return highestRatingsGenre[0];
};
// console.log(getGenreWithHighestTotalRatings()); // Should print the genre with the highest total ratings
// Q37: Write a function that returns an array of directors who have directed movies with an
// average rating above a certain value Challenging
function getDirectorsWithHighAverageRatings(threshold) {
  const directorsTotalRatings = movies.reduce((acc, movie) => {
    acc[movie.director] =
      (acc[movie.director] || 0) + movie.ratings.reduce((a, b) => a + b);
    return acc;
  }, {});
  const directorMovieCounts = movies.reduce((acc, movie) => {
    acc[movie.director] = (acc[movie.director] || 0) + 1;
    return acc;
  }, {});
  return Object.keys(directorsTotalRatings).filter((director) => {
    const totalRatings = directorsTotalRatings[director];
    const movieCount = directorMovieCounts[director];
    return totalRatings / movieCount >= threshold;
  });
}
// console.log(getDirectorsWithHighAverageRatings(8.5)); // Should print directors with high average ratings
// Q38: Write a function that updates a movie's genre and ratings by ID, using object destructuring,
// spread operator, and default values Challenging
function updateMovieDetails(movie) {
  const { id } = movie;
  return movies.map((movie) =>
    movie.id === id
      ? {
          ...movie,
          genre: newGenre,
          ratings: newRatings.length > 0 ? newRatings : movie.ratings,
        }
      : movie
  );
}
// console.log(updateMovieDetails(2, { genre: "Romance", ratings: [10, 9, 8] }));
// Should print updated Arjun Reddy
// console.log(updateMovieDetails(6, { genre: "Thriller" }));
// Should print: Movie not found
// Q39: Update or add a movie based on the id Challenging
function updateOrAddMovie(newMovie) {
  const { id, title, director, year, ratings, genre } = newMovie;
  const movieIndex = movies.findIndex((movie) => movie.id === id);
  if (movieIndex === -1) {
    // Add a new movie return [...movies, newMovie]; } else { // Update an existing movie return movies.map((movie) => movie.id === id ? { ...movie, title, director, year, ratings, genre, } : movie ); }
  }

  const CArea = (l) => (b) => (h) => l * b * h;
  function fullname() {
    return `${this.firstname} ${this.lastname}`;
  }
  const stud1 = {
    firstname: "Nithin",
    lastname: "Madduri",
    fullname,
  };
}
