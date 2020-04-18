class FloorPlan < ApplicationRecord
  belongs_to :user
  mount_uploader :floor_plan_image, AttachmentUploader # Tells rails to use this uploader for this model.   

end
