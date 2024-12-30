import { useDispatch, useSelector } from "react-redux";
import { removedTag, selectedTags } from "../../redux/features/filters/filtersSlice";

const Tag = ({tag = {}}) => {
  const dispatch = useDispatch();

  const {tags: selectedTag} = useSelector(state => state.filters);

  const isSelected = selectedTag.includes(tag?.title);

  const style = isSelected ? "bg-blue-600 text-blue-100 px-4 py-1 rounded-full cursor-pointer": "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer"


  const handleSelect = () => {
    if(isSelected){
      dispatch(removedTag(tag.title))
    }else {
      dispatch(selectedTags(tag.title))
    }
  }
  return (
    <div onClick={handleSelect} className={style}>
      {tag?.title}
    </div>
  );
};

export default Tag;
