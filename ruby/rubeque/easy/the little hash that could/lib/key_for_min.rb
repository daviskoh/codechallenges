#Given a hash with numeric values, return the key for the smallest value.

def key_for_min_value(hash)
  hash.empty? ? nil : hash.sort_by { |k, v| v }.first.first
end