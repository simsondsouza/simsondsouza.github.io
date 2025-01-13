import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../constants";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Project not found!</h1>
        <button
          className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
          onClick={() => navigate(-1)}
        >
          Back to Projects
        </button>
      </div>
    );
  }

  const renderStyledContent = (text) => {
    return text.map((part, idx) => {
      if (typeof part === "string") {
        return <span key={idx}>{part}</span>;
      }
      const { type, content, style } = part;
      switch (type) {
        case "bold":
          return <b key={idx}>{content}</b>;
        case "italic":
          return <i key={idx}>{content}</i>;
        case "underline":
          return <u key={idx}>{content}</u>;
        case "link":
          return (
            <a
              key={idx}
              href={style.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:underline"
            >
              {content}
            </a>
          );
        default:
          return null;
      }
    });
  };

  const renderDetail = (detail, index) => {
    const alignment = detail.align || "left";
    const spacing = detail.spacing || "1.5";
    const indentation = detail.indentation || "0"; // Default indentation to 0
  
    const captionStyle = {
      fontSize: detail.captionFontSize || "1rem",
      fontStyle: detail.captionFontStyle || "normal",
      color: detail.captionColor || "white",
    };
  
    switch (detail.type) {
      case "point":
        const points = detail.content.split(","); // Split content into multiple points
        return (
          <div
            key={index}
            style={{
              textAlign: alignment, // Apply alignment
              lineHeight: spacing, // Apply spacing
            }}
          >
            {points.map((point, idx) => (
              <p
                key={idx}
                className="text-gray-700 text-lg mb-2"
                style={{
                  fontSize: detail.fontSize || "1rem",
                  fontStyle: detail.fontStyle || "normal",
                  color: detail.color || "white",
                }}
              >
                • {point.trim()} {/* Trim extra spaces */}
              </p>
            ))}
          </div>
        );
      case "heading":
        return (
          <h2
            key={index}
            className="mb-4"
            style={{
              fontSize: detail.fontSize || "1.5rem",
              fontStyle: detail.fontStyle || "normal",
              fontWeight: detail.bold ? "bold" : "normal",
              textDecoration: detail.underline ? "underline" : "none",
              textAlign: alignment,
              color: detail.color || "inherit",
              lineHeight: spacing,
            }}
          >
            {detail.content}
          </h2>
        );
      case "subheading":
        return (
          <h3
            key={index}
            className="mb-3"
            style={{
              fontSize: detail.fontSize || "1.25rem",
              fontStyle: detail.fontStyle || "normal",
              fontWeight: detail.bold ? "bold" : "normal",
              textDecoration: detail.underline ? "underline" : "none",
              textAlign: alignment,
              color: detail.color || "inherit",
              lineHeight: spacing,
            }}
          >
            {detail.content}
          </h3>
        );
      case "paragraph":
        return (
          <p
            key={index}
            className="mb-4"
            style={{
              fontSize: detail.fontSize || "1rem",
              fontStyle: detail.fontStyle || "normal",
              textAlign: alignment,
              color: detail.color || "inherit",
              lineHeight: spacing,
              textIndent: indentation, // Apply the indentation style
            }}
          >
            {renderStyledContent(detail.content)}
          </p>
        );
      case "image":
        return (
          <div
            key={index}
            className="text-center mb-4"
            style={{ textAlign: detail.align || "left" }}
          >
            <img
              src={detail.src}
              alt={detail.alt || "Image"}
              style={{
                display: "inline-block",
                maxWidth: `${detail.width || "100%"}`, // Adjust maxWidth
                maxHeight: `${detail.height || "auto"}`, // Adjust maxHeight for better scaling
                objectFit: "contain", // Maintain aspect ratio
              }}
            />
            {detail.caption && (
              <p className="mt-2" style={captionStyle}>
                {detail.caption}
              </p>
            )}
          </div>
        );
        case "mediaRow":
          const rowStyle = {
            textAlign: detail.align || "left",
            gap: detail.spacing || "16px", // Apply custom spacing between items
          };
        
          return (
            <div
              key={index}
              className="flex flex-wrap justify-center mb-8"
              style={rowStyle}
            >
              {detail.content.map((item, idx) => {
                if (item.type === "image") {
                  return (
                    <div
                      key={idx}
                      className="text-center"
                      style={{
                        textAlign: item.align || detail.align || "center", // Use item align or fallback to detail align
                      }}
                    >
                      <img
                        src={item.src}
                        alt={item.alt || "Media"}
                        style={{
                          maxWidth: `${item.width || "300px"}`,
                          maxHeight: `${item.height || "auto"}`,
                          objectFit: "contain",
                        }}
                      />
                      {item.caption && (
                        <p
                          className="mt-2"
                          style={{
                            fontSize: detail.captionFontSize || "1rem",
                            fontStyle: detail.captionFontStyle || "normal",
                            color: detail.captionColor || "white",
                          }}
                        >
                          {item.caption}
                        </p>
                      )}
                    </div>
                  );
                } else if (item.type === "video") {
                  return (
                    <div
                      key={idx}
                      className="text-center"
                      style={{
                        textAlign: item.align || detail.align || "center", // Use item align or fallback to detail align
                      }}
                    >
                      <iframe
                        width={item.width || "300px"}
                        height={item.height || "200px"}
                        src={item.src}
                        title="Video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ display: "block", margin: "0 auto" }}
                      ></iframe>
                      {item.caption && (
                        <p
                          className="mt-2"
                          style={{
                            fontSize: detail.captionFontSize || "1rem",
                            fontStyle: detail.captionFontStyle || "normal",
                            color: detail.captionColor || "white",
                          }}
                        >
                          {item.caption}
                        </p>
                      )}
                    </div>
                  );
                }
                return null;
              })}
            </div>
          );        
      default:
        return null;
    }
  };  

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        className="mb-4 px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
        onClick={() => navigate(-1)}
      >
        Back to Projects
      </button>

      <h1 className="text-4xl font-bold text-center mb-8 text-teal-500">{project.title}</h1>
      <div>{project.details.map(renderDetail)}</div>
    </div>
  );
};

export default ProjectDetail;
