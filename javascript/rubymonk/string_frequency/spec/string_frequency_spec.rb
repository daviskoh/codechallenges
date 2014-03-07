require 'spec_helper'
require_relative '../lib/string_frequency'

describe '#string_frequency' do 
  it 'does something' do 
    expect(string_frequency('ello fred', 'ello')).to_not eq(nil)
  end

  it 'should handle a simple sentence & word' do 
    expect(string_frequency('ello fred', 'ello')).to eq(1)
  end

  it 'should handle a complex sentence & word' do
    expect(string_frequency('The cat in the hat ate food in the ghetto.', 'The')).to eq(3)
  end
end