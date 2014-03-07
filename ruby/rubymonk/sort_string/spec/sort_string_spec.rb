require 'spec_helper'
require_relative '../lib/sort_string'

describe '#sort_string' do 
  it 'does something' do 
    expect(sort_string('ello')).to_not eq(nil)
  end

  it 'handles a simple case with 2 words' do 
    expect(sort_string('ello foo')).to eq('foo ello')
  end

  it 'handles a case with multiple words' do 
    expect(sort_string('ello foo friend mate')).to eq('foo ello mate friend')
  end
end