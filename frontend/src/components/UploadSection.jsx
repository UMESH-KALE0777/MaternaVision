import React from 'react';

export default function UploadSection({ onFileSelect, selectedFile, preview, onRemove }) {
    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const previewUrl = URL.createObjectURL(file);
            onFileSelect(file, previewUrl);
        }
    };

    return (
        <div className="border-2 border-dashed border-blue-300 rounded-xl p-8 text-center bg-blue-50/50 my-6">
            {!selectedFile ? (
                <div className="space-y-4">
                    <div className="text-4xl">📤</div>
                    <h3 className="text-lg font-semibold text-blue-900">Upload Fetal Ultrasound Scan</h3>
                    <p className="text-sm text-gray-500">Supports PNG, JPG, or DICOM files</p>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="block w-full max-w-xs mx-auto text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer"
                    />
                </div>
            ) : (
                <div className="space-y-4">
                    <img src={preview} alt="Ultrasound preview" className="max-h-56 mx-auto rounded-lg shadow-sm border" />
                    <p className="text-sm font-medium text-gray-700">{selectedFile.name}</p>
                    <button
                        onClick={onRemove}
                        className="px-4 py-2 text-sm bg-red-100 text-red-600 rounded-md hover:bg-red-200 transition-colors"
                    >
                        Remove Image
                    </button>
                </div>
            )}
        </div>
    );
}