const MOCK_RESULT = {
  caseId: "MV-1029",
  patientId: "PAT-0042",

  bpd: {
    value: 54.2,
    confidence: 94,
    uncertainty: 1.2
  },

  ofd: {
    value: 71.8,
    confidence: 92,
    uncertainty: 1.5
  },

  hc: 198.4,

  gestationalAge: "22w 4d",

  cephalicIndex: 75.5,

  overallConfidence: 94,

  landmarkConfidence: 96,

  segmentationConfidence: 91,

  landmarkContribution: 62,

  segmentationContribution: 38,

  clinicalFlags: [
    {
      type: "success",
      text: "Measurement confidence acceptable"
    },
    {
      type: "success",
      text: "Image quality acceptable"
    },
    {
      type: "warning",
      text: "Clinical review recommended"
    }
  ]
};

export const analyzeUltrasound = async (file) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        ...MOCK_RESULT,
        imageUrl: URL.createObjectURL(file),
        originalImage: URL.createObjectURL(file),
        segmentationImage: URL.createObjectURL(file),
        gradcamImage: URL.createObjectURL(file)
      });
    }, 2500);
  });
};

export const getMockResult = () => {
  return MOCK_RESULT;
};