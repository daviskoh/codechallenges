# Given an Array, return the elements that are
# present exactly once in the array.

def non_duplicated_values(array)
  array.each_with_object([]) do |e, arr|
    arr << e if array.count(e) == 1
  end
end