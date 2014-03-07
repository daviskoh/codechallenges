require 'spec_helper'
require_relative '../lib/non_duplicated_values'

describe '#non_duplicated_values' do 
  it 'does something' do 
    expect(non_duplicated_values(['ello'])).to_not eq(nil)
  end

  it 'handles a simple case' do 
    expect(non_duplicated_values(['ello'])).to eq(['ello'])
  end
end