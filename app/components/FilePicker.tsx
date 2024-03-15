const FilePicker = () => {
  return (
    <>
      <label htmlFor="upload">
        Choose all lesson files. You can use shift or CTRL to select multiple
        files at once.
      </label>
      <input
        id="upload"
        type="file"
        accept="text/JSON"
        name="upload"
        size={30}
        multiple
      />
      <ul id="json-object"></ul>
    </>
  );
};
export default FilePicker;
