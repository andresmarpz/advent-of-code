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
        let first_number_in_string = line
            .find(|c: char| c.is_numeric())
            .map(|index| line.chars().nth(index).unwrap())
            .unwrap()
            .to_string()
            .chars()
            .next()
            .unwrap();
        let last_number_in_string = line
            .rfind(|c: char| c.is_numeric())
            .map(|index| line.chars().nth(index).unwrap())
            .unwrap()
            .to_string()
            .chars()
            .next()
            .unwrap();

        // Convert the two numbers to integers as we need it to be {}{}
        let pair = format!("{}{}", first_number_in_string, last_number_in_string);
        let result = pair.parse::<u32>().unwrap();

        total = total + result;
    }

    println!("Total: {}", total);
}
