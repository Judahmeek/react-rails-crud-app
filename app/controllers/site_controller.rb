# frozen_string_literal: true

class SiteController < ApplicationController
  def index
    @props = {
      events: Event.order(event_date: :DESC)
    }
  end
end
