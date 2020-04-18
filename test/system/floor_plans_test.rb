require "application_system_test_case"

class FloorPlansTest < ApplicationSystemTestCase
  setup do
    @floor_plan = floor_plans(:one)
  end

  test "visiting the index" do
    visit floor_plans_url
    assert_selector "h1", text: "Floor Plans"
  end

  test "creating a Floor plan" do
    visit floor_plans_url
    click_on "New Floor Plan"

    fill_in "Floor plan image", with: @floor_plan.floor_plan_image
    fill_in "User", with: @floor_plan.user_id
    click_on "Create Floor plan"

    assert_text "Floor plan was successfully created"
    click_on "Back"
  end

  test "updating a Floor plan" do
    visit floor_plans_url
    click_on "Edit", match: :first

    fill_in "Floor plan image", with: @floor_plan.floor_plan_image
    fill_in "User", with: @floor_plan.user_id
    click_on "Update Floor plan"

    assert_text "Floor plan was successfully updated"
    click_on "Back"
  end

  test "destroying a Floor plan" do
    visit floor_plans_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Floor plan was successfully destroyed"
  end
end
