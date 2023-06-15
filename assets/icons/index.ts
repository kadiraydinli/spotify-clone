import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { TbPlaylist } from "react-icons/tb";
import {
    AiOutlineHeart,
    AiOutlinePlus,
    AiFillHeart,
    AiFillStepBackward,
    AiFillStepForward
} from "react-icons/ai";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { FaPlay, FaUserAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { HiSpeakerXMark, HiSpeakerWave } from "react-icons/hi2";

const Icon = {
    Home: HiHome,
    Search: BiSearch,
    Left: RxCaretLeft,
    Right: RxCaretRight,
    PlayList: TbPlaylist,
    Add: AiOutlinePlus,
    Play: FaPlay,
    Close: IoMdClose,
    User: FaUserAlt,
    FillHeart: AiFillHeart,
    OutlineHeart: AiOutlineHeart,
    Pause: BsPauseFill,
    PlayFill: BsPlayFill,
    FillStepBackward: AiFillStepBackward,
    FillStepForward: AiFillStepForward,
    Speaker: HiSpeakerXMark,
    SpeakerWave: HiSpeakerWave,
};

export default Icon;