use std::{
    fs::File,
    io::{BufReader, Read},
};

fn main() {
    // Open the file
    let file = File::open("input.txt").expect("Failed to open file");

    // Create a buffered reader
    let mut reader = BufReader::new(file);

    // Read the contents into a string
    let mut contents = String::new();
    reader
        .read_to_string(&mut contents)
        .expect("Failed to read file");

    // Split the string into a vector of lines
    let lines: Vec<&str> = contents.split("\n").collect();

    let mut total = 0;

    // Loop through the lines
    for line in lines {
        let chars = line.chars();
        let mut first_number_in_string: i32 = -1;
        let mut last_number_in_string = -1;

        // Loop through the characters in the line
        for char in chars {
            // Only care about numeric characters
            if char.is_numeric() {
                if first_number_in_string == -1 {
                    first_number_in_string = char.to_digit(10).unwrap() as i32;
                }

                last_number_in_string = char.to_digit(10).unwrap() as i32;
            }
        }

        // Group the first and last numbers together and parse them as a u32
        let pair = format!("{}{}", first_number_in_string, last_number_in_string);
        let result = pair.parse::<u32>().unwrap();

        total = total + result;
    }

    println!("Total: {}", total);
}
