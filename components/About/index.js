import Carousal from "../Carousal";
import { ASIDE_CONTENT_TYPES } from "./enums";

export default function About(props) {
  const {
    subtitle,
    title ,
    description,
    ctaData,
    backgroundData,
    asideContentData,
    openModal,
    setOpenModal
  } = props;
  return (
    <div className={`${backgroundData} from-white to-gray-50 py-24`} id="about us">
      <div className="container mx-auto px-4 max-w-6xl">
        {title ? (
          <h1 className="text-5xl mb-20 text-center text-black uppercase tracking-wider font-semibold transition-colors duration-300 hover:text-background/80">
            {title}
          </h1>
        ) : (
          <></>
        )}

        {subtitle ? (
          <h1 className="text-lg mb-4 text-center text-black uppercase tracking-wider font-normal transition-colors duration-300 hover:text-background/60">
            {subtitle}
          </h1>
        ) : (
          <></>
        )}

        <div className="relative grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:pr-20 text-left transform hover:-translate-y-1 transition-transform duration-300">
            {description && description.length ? (
              description.map((descriptionItem, descriptionIndex) => (
                <p
                  key={descriptionIndex}
                  className="text-base text-gray-600 leading-relaxed font-light hover:text-gray-900 transition-colors duration-300"
                >
                  {descriptionItem}
                </p>
              ))
            ) : (
              <></>
            )}

            {ctaData && ctaData.buttonText && typeof ctaData?.buttonClick === "function" ? (
              <button
                className="mt-8 px-8 py-3 bg-background/80 text-black rounded-lg font-medium 
                  tracking-wide uppercase hover:bg-background transform hover:-translate-y-1 
                  transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={ctaData.buttonClick}
              >
                {ctaData.buttonText}
              </button>
            ) : (
              <></>
            )}
          </div>

          <div className="relative h-[500px] mt-8 md:mt-0 group">
            {asideContentData && asideContentData.url ? (
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-background/20 transition-all duration-500 group-hover:shadow-background">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent z-10 group-hover:from-blue-900/20 transition-colors duration-300" />
                {asideContentData.type === ASIDE_CONTENT_TYPES.IMAGE ? (
                  <img
                    src={asideContentData.url}
                    alt={asideContentData.altText}
                    fill
                    className="object-contain transition-transform duration-700 ease-out group-hover:scale-110"
                    priority
                  />
                ) : asideContentData.type === ASIDE_CONTENT_TYPES.VIDEO ? (
                  <video
                    src={asideContentData.url}
                    autoPlay={asideContentData.autoPlay}
                    loop={asideContentData.loop}
                    alt={asideContentData.altText}
                    className="object-contain transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                ) : asideContentData.type === ASIDE_CONTENT_TYPES.CAROUSEL ? (
                  <Carousal
                    src={asideContentData.url}
                    alt={asideContentData.altText}
                    fill
                    className="object-contain transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                ) : (
                  <></>
                )}
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      {openModal && (
        <ModalComponent openModal={openModal} setOpenModal={setOpenModal} />
      )}
    </div>
  );
}
