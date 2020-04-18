class RegistrationsController < Devise::RegistrationsController
    def new
        super
        p "I am registrations controller!"
    end

    def create
        # add custom create logic here
    end

    def update
        super
    end
end 