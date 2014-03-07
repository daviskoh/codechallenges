# Create a method named 'sort_string' which accepts a String
# and rearranges all the words in ascending order, by length.

def sort_string(string)
  string.split(/\W+/).sort_by(&:length).join(' ')
end