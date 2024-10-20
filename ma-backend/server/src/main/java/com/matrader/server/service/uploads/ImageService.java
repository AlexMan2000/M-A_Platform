package com.matrader.server.service.uploads;

import com.matrader.server.dto.auths.ProfileImageMetadata;
import com.mongodb.client.gridfs.model.GridFSFile;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;


public interface ImageService {
    String saveImage(MultipartFile file) throws IOException;

    String saveImage(byte[] imageBytes, ProfileImageMetadata profileImageMetadata) throws IOException;

    GridFSFile getImage(String id);

    InputStream getImageStream(GridFSFile file);
}
