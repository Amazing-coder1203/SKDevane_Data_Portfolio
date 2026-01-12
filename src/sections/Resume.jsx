import { useState, useEffect } from "react";
import { Element } from "react-scroll";
import Button from "../components/Button.jsx";
import clsx from "clsx";

const Resume = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const resumeUrl = "resume/SK_Devane_CV.pdf";

    // Prevent scrolling when expanded
    useEffect(() => {
        if (isExpanded) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isExpanded]);

    return (
        <section className="relative z-2 py-24 md:py-28 lg:py-40">
            <Element name="Resume">
                <div className="container">
                    <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10 border-2 border-s3 rounded-7xl p-8 md:p-16 lg:p-20 g7">

                        {/* Left Side: Content */}
                        <div className="flex-1 flex flex-col items-start text-left max-lg:items-center max-lg:text-center">
                            <p className="caption mb-4 uppercase text-p3">Professional Credentials</p>
                            <h2 className="h2 mb-6 text-p4 uppercase max-md:h4">
                                My Resume
                            </h2>
                            <p className="body-1 mb-8 max-w-md max-lg:mx-auto">
                                Technical expertise in Data Analysis, Python, and SQL. Download my full CV for detailed project experience and academic background.
                            </p>
                            <a href={resumeUrl} download="SK_Devane_Resume.pdf">
                                <Button icon="images/zap.svg">Download PDF</Button>
                            </a>
                        </div>

                        {/* Right Side: Compact Interactive Preview Card */}
                        <div className="flex-1 w-full max-w-[400px] flex justify-center items-center relative group">
                            <div
                                onClick={() => setIsExpanded(true)}
                                className="download_preview-before download_preview-after rounded-30 md:rounded-40 relative border-2 border-s5 overflow-hidden bg-s1 w-full aspect-[1/1.414] flex items-center justify-center cursor-pointer transition-all duration-500 hover:scale-[1.03] active:scale-95 shadow-3xl"
                            >
                                {isLoading && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-s2 z-10">
                                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-p1"></div>
                                    </div>
                                )}

                                <iframe
                                    src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                                    className={clsx(
                                        "w-full h-full pointer-events-none transition-opacity duration-500",
                                        isLoading ? "opacity-0" : "opacity-100"
                                    )}
                                    title="Resume Preview"
                                    onLoad={() => setIsLoading(false)}
                                    loading="lazy"
                                />

                                {/* Interactive Overlay */}
                                <div className="absolute inset-0 bg-s1/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-20">
                                    <div className="bg-p1/20 backdrop-blur-md px-6 py-3 rounded-full border border-p1/30 scale-90 group-hover:scale-100 transition-transform duration-500">
                                        <p className="base-bold text-p4 uppercase tracking-wider">Quick View</p>
                                    </div>
                                </div>
                                <div className="absolute inset-0 pointer-events-none border-4 border-s2/20 rounded-30 md:rounded-40" />
                            </div>
                        </div>

                    </div>
                </div>
            </Element>

            {/* EXPANDED MODAL VIEW */}
            <div
                className={clsx(
                    "fixed inset-0 z-[100] flex items-center justify-center bg-s2/95 backdrop-blur-md transition-all duration-500 ease-out",
                    isExpanded ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
                onClick={() => setIsExpanded(false)}
            >
                <div
                    className={clsx(
                        "relative w-[95vw] h-[90vh] md:w-[85vw] md:h-[95vh] bg-s1 rounded-3xl border-2 border-s3 overflow-hidden transition-all duration-500 shadow-500",
                        isExpanded ? "scale-100 opacity-100" : "scale-95 opacity-0"
                    )}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header bar in modal */}
                    <div className="flex items-center justify-between px-6 py-3 border-b border-s3 bg-s2/50">
                        <p className="base-bold text-p4 uppercase text-xs md:text-base">SK Devane - Professional Resume</p>
                        <button
                            onClick={() => setIsExpanded(false)}
                            className="size-8 md:size-10 rounded-full border border-s3 flex items-center justify-center hover:border-p1 transition-colors group"
                        >
                            <img src="images/close.svg" alt="close" className="size-1/2 object-contain group-hover:rotate-90 transition-transform duration-300" />
                        </button>
                    </div>

                    <iframe
                        src={`${resumeUrl}#view=FitH`}
                        className="w-full h-full"
                        title="Resume Full View"
                    />
                </div>
            </div>
        </section>
    );
};

export default Resume;
