import { BiLike, BiDislike } from "react-icons/bi";

const LikeUnlike = () => {
    return (
        <div className="flex gap-10 w-48">
          <div className="flex gap-1 items-center">
            <div className="shrink-0">
              <BiLike/>
            </div>
            <div className="text-sm leading-[1.7142857] text-slate-600">100K</div>
          </div>
          <div className="flex gap-1 items-center">
            <div className="shrink-0">
              <BiDislike/>
            </div>
            <div className="text-sm leading-[1.7142857] text-slate-600">100K</div>
          </div>
        </div>
    );
};

export default LikeUnlike;