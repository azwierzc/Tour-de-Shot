package com.teamg.tourdeshot.core.api.local;

import com.teamg.tourdeshot.core.api.local.request.FilterRequestBody;
import com.teamg.tourdeshot.core.model.Coordinates;
import com.teamg.tourdeshot.core.model.Local;
import com.teamg.tourdeshot.core.service.LocalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/local")
public class LocalController {

    private final LocalService localService;

    @Autowired
    public LocalController(LocalService localService) {
        this.localService = localService;
    }

    @GetMapping("/{id}")
    public LocalDTO findLocalById(@PathVariable Long id) {
        return localService.findLocalById(id);
    }

    @GetMapping("/pageable")
    public List<LocalDTO> findAllLocalsPageable(@RequestParam("page") int page, @RequestParam("pageSize") int pageSize) {
        return localService.findAllPageable(PageRequest.of(page, pageSize));
    }

    @GetMapping
    public List<LocalDTO> findAllLocalsByDistance(@RequestParam BigDecimal lat, @RequestParam BigDecimal lon) {
        return localService.findAllSortedByDistance(new Coordinates(lat, lon));
    }

    @PostMapping("/filter")
    public List<LocalDTO> filterLocals(@RequestBody FilterRequestBody requestBody) {
        return null;
    }

    @PostMapping
    public Local addLocal(@RequestBody LocalPostDTO local) {
        return localService.addLocal(local);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteById(@PathVariable Long id) {
        return localService.deleteById(id);
    }

}
