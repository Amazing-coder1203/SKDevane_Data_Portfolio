import { useState, useEffect } from "react";
import { Element } from "react-scroll";
import Button from "../components/Button.jsx";
import clsx from "clsx";

const Resume = () => {
    const [isExpanded, setIsExpanded] = useState(false);
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
                    <div className="relative flex max-lg:flex-col items-center gap-12 border-2 border-s3 rounded-7xl p-10 md:p-20 g7">

                        {/* Left Side: Content */}
                        <div className="flex-1 flex flex-col items-start">
                            <p className="caption mb-5 uppercase text-p3">Professional Credentials</p>
                            <h2 className="h2 mb-7 text-p4 uppercase max-md:h4">
                                My Resume
                            </h2>
                            <p className="body-1 mb-10 max-w-md">
                                Detailed overview of my technical skills, professional experience, and academic background in Data Analysis and Software Engineering.
                            </p>
                            <div className="flex gap-4">
                                <a href={resumeUrl} download="SK_Devane_Resume.pdf">
                                    <Button icon="images/zap.svg">Download PDF</Button>
                                </a>
                                <button
                                    onClick={() => setIsExpanded(true)}
                                    className="base-bold text-p4 uppercase transition-colors duration-500 hover:text-p1"
                                >
                                    Expand Preview
                                </button>
                            </div>
                        </div>

                        {/* Right Side: Interactive Preview Card */}
                        <div className="flex-1 w-full flex justify-center items-center relative group">
                            <div
                                onClick={() => setIsExpanded(true)}
                                className="download_preview-before download_preview-after rounded-40 relative border-2 border-s5 overflow-hidden bg-s1 w-full max-w-[450px] aspect-[1/1.41] flex items-center justify-center cursor-pointer transition-transform duration-500 hover:scale-[1.02] active:scale-95 shadow-2xl"
                            >
                                <iframe
                                    src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                                    className="w-full h-full pointer-events-none scale-[1.01]"
                                    title="Resume Preview"
                                />
                                {/* Click to Expand Overlay */}
                                <div className="absolute inset-0 bg-s1/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                    <div className="bg-p1/20 backdrop-blur-md px-6 py-3 rounded-full border border-p1/30">
                                        <p className="base-bold text-p4 uppercase">View Full Resume</p>
                                    </div>
                                </div>
                                <div className="absolute inset-0 pointer-events-none border-4 border-s1 rounded-40" />
                            </div>
                        </div>

                    </div>
                </div>
            </Element>

            {/* EXPANDED MODAL VIEW */}
            <div
                className={clsx(
                    "fixed inset-0 z-[100] flex items-center justify-center bg-s2/90 backdrop-blur-xl transition-all duration-700 ease-in-out",
                    isExpanded ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
                onClick={() => setIsExpanded(false)}
            >
                <div
                    className={clsx(
                        "relative w-[90vw] h-[90vh] bg-s1 rounded-40 border-2 border-s3 overflow-hidden transition-all duration-700 shadow-500",
                        isExpanded ? "scale-100 translate-y-0" : "scale-90 translate-y-10"
                    )}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header bar in modal */}
                    <div className="flex items-center justify-between px-8 py-4 border-b-2 border-s3">
                        <p className="base-bold text-p4 uppercase">Resume Quick View</p>
                        <button
                            onClick={() => setIsExpanded(false)}
                            className="size-10 rounded-full border-2 border-s3 flex items-center justify-center hover:border-p1 transition-colors"
                        >
                            <img src="images/close.svg" alt="close" className="size-1/2 object-contain" />
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
