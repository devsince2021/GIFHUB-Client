const omitLongFileName = (Component, text) => {
  switch (true) {
    case (text.includes('Select')):
      return(
        <Component size='SMALL'>
          {text}
        </Component>
      );
    case (text.length > 12):
      const omitted = text.substring(0, 10);
      const newText = `${omitted + '...'}`;
      return(
      <Component size='SMALL'>
        {newText}
      </Component>);
    case (text.length > 7):
      return (
        <Component size='SMALL'>
          {text}
        </Component>
      );
    default:
      return (
        <Component>
          {text}
        </Component>
      );
  }
};

export default omitLongFileName;
