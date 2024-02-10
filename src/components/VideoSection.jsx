import ProductVideo from '../../public/Videos/Video Placeholder.mp4'
import OrderButton from '../shared/OrderButton';

const VideoSection = () => {
    return (
        <div className="w-full bg-[#2e2e2e] text-center pt-16 pb-6 px-28">
            <div className="flex justify-center">
                {/* Title Bar */}
                <h1 className="w-full py-4 bg-white text-[#EF0427] text-[42px] font-sans font-bold rounded border border-black" style={{ boxShadow: "#fff 0px 0px 18px" }}>One Plus Airpods Pro</h1>
            </div>
            {/* Product Benefits Text */}
            <h2 className="text-white text-2xl font-semibold my-6 " style={{ fontFamily: "'Hind Siliguri', sans-serif" }}><p>সাউন্ড কোয়ালিটি এক কথায় অসাধারণ।</p> যারা লো বাজেটে <span className="text-[#f2ec1f]">বেস্ট সাউন্ড কোয়ালিটির</span> এক্সপেরিয়েন্স চান তাদের জন্য এটি।</h2>
            {/* Product Video */}
            <div className="flex justify-center">
                <video className='border-[6px] border-[#F2EC1A] rounded-xl' width="767" height="431" muted autoPlay controls loop>
                    <source src={ProductVideo} type="video/mp4" />
                </video>
            </div>
            {/* Order Button */}
            <OrderButton/>
        </div>
    );
};

export default VideoSection;