#[aoc(day1, part1)]
fn part1(input: &str) -> u32 {
    // Split the string into a vector of lines
    let lines: Vec<&str> = input.split("\n").collect();

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
    total
}
