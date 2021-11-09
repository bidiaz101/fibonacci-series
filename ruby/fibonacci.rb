def fibonacci(num)
  # type your code in here
  seeds = [0, 1]

  i = 0

  num.times do 
    seeds.push(seeds[i] + seeds[i + 1])

    i += 1
  end

  seeds[num]
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 0"
  puts "=>", fibonacci(0)

  puts "Expecting: 610"
  puts "=>", fibonacci(15)

  puts "Expecting: 1"
  puts "=>", fibonacci(2)

  puts "Expecting: 6765"
  puts "=>", fibonacci(20)

  puts "Expecting: 55"
  puts "=>", fibonacci(10)

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
