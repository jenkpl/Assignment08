//STEP 1:Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.
    // let fMovies = ['The Princess Bride', 'Nacho Libre', 'The Three Amigos', 'The Right Stuff', 'The Money Pit'];
    // console.log(fMovies[1]);

//STEP 2:Declare an array called movies using the function constructor method. Add the length of 5 into the constructor. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Then, use the console to display the first movie in your array.
    // let movies = new Array (5);
    // movies[0]  = 'Back to the Future';
    // movies[1]  = 'Bambi';
    // movies[2]  = 'Goonies';
    // movies[3]  = 'X-Men';
    // movies[4]  = 'Apollo 13';
    // console.log(movies[0]);

//STEP 3:Copy your code from step 2. Add a new movie into the 3rd position within your array. Then, use the console to display the length of the array. You should now have 6 total movies stored in the array.
    // let movies = new Array (5);
    // movies[0]  = 'Back to the Future';
    // movies[1]  = 'Bambi';
    // movies[2]  = 'Goonies';
    // movies[3]  = 'X-Men';
    // movies[4]  = 'Apollo 13';
    // movies[2]  = 'The Usual Suspects';
    // console.log(movies.length);

//STEP 4:Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array.
    // let movies = ['The Sword in the Stone', 'Real Genius', 'Big Business', 'Ghostbusters', 'Beetlejuice'];
    // delete movies [0];
    // console.log(movies);

//STEP 5:Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. Now, use a for/in loop to iterate through the array and display each movie within the console window. 
    // let movies = ['The Sword in the Stone', 'Real Genius', 'Big Business', 'Ghostbusters', 'Beetlejuice', 'Airplane!', 'Star Wars'];

    // for (let i = 0; i < movies.length; i++) {
    //     console.log(movies[i]);
    // }
    
//STEP 6:Copy the code from step 5. Now, use a for/of loop to iterate through the array and display each movie within the console window.
    // let movies = ['The Sword in the Stone', 'Real Genius', 'Big Business', 'Ghostbusters', 'Beetlejuice', 'Airplane!', 'Star Wars'];

    // for (let i of movies) {
    //     console.log(i);
    // }
//STEP 7:Copy the code from step 5. Using the for/of loop to iterate through the array, display each movie within the console window in a sorted view.
    // let movies = ['The Sword in the Stone', 'Real Genius', 'Big Business', 'Ghostbusters', 'Beetlejuice', 'Airplane!', 'Star Wars'];

    // for (let i of movies) {
    //     console.log(movies.sort());
    // }


//STEP 8:Copy the code from step 5. Under the existing array, create a new array called leastFavMovies. Populate the array with the 3 movies that you regret watching. Display both arrays within the console window so that it’s formatted to look like this (note the spacing, you must include that too):
    // let Favmovies = ['The Sword in the Stone', 'Real Genius', 'Big Business', 'Ghostbusters', 'Beetlejuice', 'Airplane!', 'Star Wars'];

    // let leastFavMovies = ['Gigli', 'As Good as It Gets', 'Jerry Maguire'];

    // console.log('Movies I like:');
    // console.log('');
    // console.log(Favmovies[0]);
    // console.log(Favmovies[1]);
    // console.log(Favmovies[2]);
    // console.log('...');
    // console.log('');
    // console.log('Movies I regret watching:');
    // console.log('');
    // console.log(leastFavMovies[0]);
    // console.log(leastFavMovies[1]);
    // console.log(leastFavMovies[2]);
    // console.log('...');
//STEP 9:Copy the code from step 8. Now, use the concat() method to merge the two arrays together into a single array called movies. Use the console window to display the list in reverse sorted order.
    // let Favmovies = ['The Sword in the Stone', 'Real Genius', 'Big Business', 'Ghostbusters', 'Beetlejuice', 'Airplane!', 'Star Wars'];

    // let leastFavMovies = ['Gigli', 'As Good as It Gets', 'Jerry Maguire'];
    // let movies = Favmovies.concat('Gigli', 'As Good as It Gets', 'Jerry Maguire');
    // console.log(movies.reverse());
//STEP 10:Copy the code from step 9. Use an array function to return just the last item in the array and display it within the console window.
    // let Favmovies = ['The Sword in the Stone', 'Real Genius', 'Big Business', 'Ghostbusters', 'Beetlejuice', 'Airplane!', 'Star Wars'];

    // let leastFavMovies = ['Gigli', 'As Good as It Gets', 'Jerry Maguire'];
    // let movies = Favmovies.concat('Gigli', 'As Good as It Gets', 'Jerry Maguire');
    // const lastEntry = movies[(movies.length - 1)]
    // console.log(lastEntry);

//STEP 11:Copy the code from step 10. Remove the previous method and this time use a method to return just the first item in the array and display it within the console window.
    // let Favmovies = ['The Sword in the Stone', 'Real Genius', 'Big Business', 'Ghostbusters', 'Beetlejuice', 'Airplane!', 'Star Wars'];

    // let leastFavMovies = ['Gigli', 'As Good as It Gets', 'Jerry Maguire'];
    // let movies = Favmovies.concat('Gigli', 'As Good as It Gets', 'Jerry Maguire');
    // console.log(movies[0]);

//STEP 12:Programmatically retrieve the movies in your array that you do not like and return their indices. Then, using those indices, programmatically add movies that you do like. 
    // let Favmovies = ['The Sword in the Stone', 'Real Genius', 'Big Business', 'Ghostbusters', 'Beetlejuice', 'Airplane!', 'Star Wars'];

    // let leastFavMovies = ['Gigli', 'As Good as It Gets', 'Jerry Maguire'];
    // let movies = Favmovies.concat('Gigli', 'As Good as It Gets', 'Jerry Maguire');
    // const leastFM1 = movies.indexOf('Gigli');
    // const leastFM2 = movies.indexOf('As Good as It Gets');
    // const leastFM3 = movies.indexOf('Jerry Maguire');
    // console.log(leastFM1);
    // console.log(leastFM2);
    // console.log(leastFM3);
    // movies[leastFM1] = 'Pretty in Pink';
    // movies[leastFM2] = 'The Breakfast Club';
    // movies[leastFM3] = 'Some Kind of Wonderful';
    // console.log(movies[leastFM1]);
    // console.log(movies[leastFM2]);
    // console.log(movies[leastFM3]);
    
//STEP 13:Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5. The array should look something like this: 
//Now, loop through the array and filter out and display only the movie names. You must use the filter() method and you’ll need to filter out the names by their primitive data type.

//     let movies = [
//         ['Princess Bride', 1],
//         ['Spaceballs', 2],
//         ['The Usual Suspects', 3],
//         ['Nacho Libre', 4],
//         ['The Right Stuff', 5]
//     ];
//     console.table(movies);

//     for (i=0; i<movies.length;  i++){
//    let sift = movies[i].filter((item) => {
//         return typeof item === "string"
//     });
//     console.log(sift);
// }

//STEP 14:Create a string array called employees using literal notation and populate the array with several employee names. Then, create an anonymous function called showEmployee. The function should accept a parameter. Call this function, passing in the employees array into the function as a parameter. Make sure to display the result in the console window. Within the function, loop through the passed in array and display the result so that it looks exactly like this in the console window:

// let employees = [
//     'Alice',
//     'Ben',
//     'Charlie',
//     'Dean',
//     'Eddie',
//     'Frank'
// ];

//console.log(employees);
// console.log(employees.toString().toUpperCase());
// for(i=0;i<employees.length; i++){
// let showEmployee = (employees) => {
//     console.log(employees.toUpperCase());
// };
// }
// showEmployee(employees);
// const spec = (that) => {
//     console.log(that.toUpperCase()`Employees:`)};
//     spec(employees);
    

// spec(employees);
//console.log.showEmployee(nums);



//STEP 15:Write a JavaScript function to filter false, null, 0 and blank values from an array.Test Data: console.log(filterValues([58, '', 'abcd', true, null, false, 0]));Expected Result: [58, "abcd", true]
let filterValues =  (param) =>{
       param.filter((item) =>{
            return typeof item !== "boolean"
        });
       };
       
       console.log(filterValues([58, '', 'abcd', true, null, false, 0]));
       




//STEP 16:Write a JavaScript function to get a random item from an array. So if I create a numeric array with 10 numbers and then pass that array into my function, the function should randomly return one of those numbers.
let tips = ['', 10, 'goop', 'poop', 'hoop', 11, 'roop', 'loop', 56, 88, 33];

// const numRando = (exam) =>{
//     let y = exam.length - 1
//     let r = Math.floor((Math.random() * y) + 1);
//     console.log(r);
//     console.table(exam);
//     console.log(exam[r]);
// }
// numRando(tips);

// STEP 17:Write a JavaScript function to get the largest number from a numeric array
// let nums = [54, 876, 234, 10000, 1, 78, 5432, 999999, 3, 0, 1234567, 9876543, 12, 9, 100];
// let arrayDesc = nums.sort((a, b) => b - a);
// console.log(arrayDesc);
// console.log(arrayDesc[0]);
