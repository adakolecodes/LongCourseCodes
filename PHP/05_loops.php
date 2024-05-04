<?php

/* -------- Loops & Iteration ------- */

/* ------------ For Loop ------------ */

/*
** For Loop Syntax
  for (initialize; condition; increment) {
  // code to be executed
  }
*/

for ($x = 0; $x <= 10; $x++) {
  echo "Number: $x <br>";
}

/* ------------ While Loop ------------ */

/*
** While Loop Syntax
  while (condition) {
  // code to be executed
  }
*/

// $x = 1;

// while ($x <= 5) {
//   echo "Number: $x <br>";
//   $x++;
// }

/* ---------- Do While Loop --------- */

/*
** Do While Loop Syntax
  do {
  // code to be executed
  } while (condition);

do...while loop will always execute the block of code once, even if the condition is false.
*/

// do {
//   echo "Number: $x <br>";
//   $x++;
// } while ($x <= 5);

/* ---------- Foreach Loop ---------- */

/*
** Foreach Loop Syntax
  foreach ($array as $value) {
  // code to be executed
  }
*/

// Loop through an array

$numbers = [1, 2, 3, 4, 5];

foreach ($numbers as $number) {
  echo "Number: $number <br>";
}

//Loop through an associative array

$books = [
    [
        "title" => "The Catcher in the Rye",
        "author" => "J.D. Salinger",
        "release_year" => 1951,
        "purchase_url" => "https://example.com/catcher-in-the-rye"
    ],
    [
        "title" => "Pride and Prejudice",
        "author" => "Jane Austen",
        "release_year" => 1813,
        "purchase_url" => "https://example.com/pride-and-prejudice"
    ],
    [
        "title" => "The Hobbit",
        "author" => "J.R.R. Tolkien",
        "release_year" => 1937,
        "purchase_url" => "https://example.com/the-hobbit"
    ],
    [
        "title" => "The Lord of the Rings",
        "author" => "J.R.R. Tolkien",
        "release_year" => 1954,
        "purchase_url" => "https://example.com/the-lord-of-the-rings"
    ],
    [
        "title" => "Harry Potter and the Philosopher's Stone",
        "author" => "J.K. Rowling",
        "release_year" => 1997,
        "purchase_url" => "https://example.com/harry-potter"
    ]
];

foreach ($books as $book): ?>
  <ul>
    <li>Title: <?php echo $book['title']; ?></li>
  </ul>
<?php endforeach; ?>


// Use the indexes within the loop

// $posts = ['Post One', 'Post Two', 'Post Three'];

// foreach ($posts as $index => $post) {
//   echo "${index} - ${post} <br>";
// }

// Use the keys within the loop for an associative array

// $person = [
//   'first_name' => 'Brad',
//   'last_name' => 'Traversy',
//   'email' => 'brad@gmail.com',
// ];

// Get Keys
// foreach ($person as $key => $val) {
//   echo "${key} - ${val} <br>";
// }
