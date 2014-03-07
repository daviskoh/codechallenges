require 'spec_helper'
require_relative '../lib/non_duplicated_values'

describe '#non_duplicated_values' do 
  it 'does something' do 
    expect(non_duplicated_values(['ello'])).to_not eq(nil)
  end

  it 'handles a simple case' do 
    expect(non_duplicated_values(['ello'])).to eq(['ello'])
  end

  it 'handles a case where counting is required' do 
    expect(non_duplicated_values(['ello', 'ello', 'foo'])).to eq(['foo'])
  end

  it 'handles a complex case where multiple values match requirements' do 
    expect(non_duplicated_values(['ello', 'dude', 'dude', 'foo']).sort).to eq(['ello', 'foo'].sort)
  end
end