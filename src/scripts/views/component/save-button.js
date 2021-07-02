const createSaveButtonTemplate = () => `
  <div class="save-restaurant">
    <button aria-label="save restaurant" class="fa fa-save" id="saveButton"></button>
  </div>
`;

const createDeleteButtonTemplate = () => `
  <div class="save-restaurant">
    <button aria-label="unsave restaurant" class="fa fa-trash-o" id="saveButton"></button>
  </div>
`;

export { createSaveButtonTemplate, createDeleteButtonTemplate };
