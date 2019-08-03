ReactOnRails.configure do |config|
  config.node_modules_location = ""
  config.build_production_command = "yarn run build:production"
  config.build_test_command = "yarn run build:test"

  config.server_bundle_js_file = "server-bundle.js"
end
